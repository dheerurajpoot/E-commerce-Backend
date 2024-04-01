import { generateRefreshToken } from "../config/generateRefreshToken.js";
import { generateToken } from "../config/generateToken.js";
import { User } from "../models/userModel.js";
import { validateUserId } from "../utils/validateUserId.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
	try {
		const email = req.body;
		const findUser = await User.findOne(email);
		if (!findUser) {
			const newUser = await User.create(req.body);
			res.status(200).json(newUser);
		} else {
			res.status(500).json({
				message: "User Already Exist",
				success: false,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

//  user login

export const userLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		const findUser = await User.findOne({ email });
		if (findUser && (await findUser.isPasswordMatched(password))) {
			const refreshToken = await generateRefreshToken(findUser?._id);
			const updateUser = await User.findByIdAndUpdate(
				findUser.id,
				{
					refreshToken: refreshToken,
				},
				{ new: true }
			);
			res.cookie("refreshToken", refreshToken, {
				httpOnly: true,
				maxAge: 72 * 60 * 60 * 1000,
			});
			res.status(200).json({
				_id: findUser?._id,
				name: findUser?.name,
				email: findUser?.email,
				mobile: findUser?.mobile,
				token: generateToken(findUser?._id),
			});
		} else {
			res.status(500).json({
				message: "Invalid Email or Password",
				success: false,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

// handle refresh token
export const refreshTokenHandler = async (req, res) => {
	const cookie = req.cookies;
	if (!cookie?.refreshToken) {
		res.status(500).json({
			message: "No Refresh Token found in cookie",
			success: false,
		});
	}
	const refreshToken = cookie.refreshToken;
	const user = await User.findOne({ refreshToken });
	if (!user) {
		res.status(500).json({
			message: "No Refresh Token found in database or token not matched",
			success: false,
		});
	}
	jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
		if (err || user.id !== decoded.id) {
			res.status(500).json({
				message: "Something went wrong with refresh token",
			});
		}
		const accessToken = generateToken(user?._id);
		res.json({ accessToken });
	});
};

// log out user

export const logOut = async (req, res) => {
	const cookie = req.cookies;
	if (!cookie?.refreshToken) {
		res.status(500).json({
			message: "No Refresh Token found in cookie",
			success: false,
		});
	}
	const refreshToken = cookie.refreshToken;
	const user = await User.findOne({ refreshToken });
	if (!user) {
		res.clearCookie("refreshToken", {
			httpOnly: true,
			secure: true,
		});
		return res.sendStatus(204);
	}
	await User.findOneAndUpdate(
		{ refreshToken },
		{
			refreshToken: "",
		}
	);
	res.clearCookie("refreshToken", {
		httpOnly: true,
		secure: true,
	});
	res.sendStatus(204);
};

//  update user

export const updateUser = async (req, res) => {
	const { _id } = req.user;
	validateUserId(_id);
	try {
		const updateUser = await User.findByIdAndUpdate(
			_id,
			{
				name: req?.body?.name,
				email: req?.body?.email,
				mobile: req?.body?.mobile,
			},
			{
				new: true,
			}
		);
		if (updateUser) {
			res.status(200).json(updateUser);
		} else {
			res.status(500).json({
				message: "Internal Server Error",
				success: false,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

// get all users

export const getAllUsers = async (req, res) => {
	try {
		const allUsers = await User.find();
		if (allUsers) {
			res.status(200).json(allUsers);
		} else {
			res.status(500).json({
				message: "You do not have any user",
				success: false,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

//  get one user

export const getUser = async (req, res) => {
	const { id } = req.params;
	try {
		const findUser = await User.findById(id);
		if (findUser) {
			res.status(200).json(findUser);
		} else {
			res.status(500).json({
				message: "No user found",
				success: false,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

// delete user
export const deleteUser = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedUser = await User.findByIdAndDelete(id);
		if (deletedUser) {
			res.status(200).json(deletedUser);
		} else {
			res.status(500).json({
				message: "No user found",
				success: false,
			});
		}
	} catch (error) {
		console.log(error);
	}
};
