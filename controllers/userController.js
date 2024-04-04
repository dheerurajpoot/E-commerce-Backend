import { generateRefreshToken } from "../config/generateRefreshToken.js";
import { generateToken } from "../config/generateToken.js";
import { User } from "../models/userModel.js";
import { validateUserId } from "../utils/validateUserId.js";
import jwt from "jsonwebtoken";
import { sendMail } from "./mailController.js";
import crypto from "crypto";
import { Product } from "../models/productModel.js";
import { Cart } from "../models/cartModel.js";

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
		res.status(500).json({ error: "Internal Server Error" });
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
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// login Admin

export const adminLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		const findAdmin = await User.findOne({ email });
		if (findAdmin.role !== "admin") {
			res.status(301).json({
				message: "You are not Authorised",
			});
		}
		if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
			const refreshToken = await generateRefreshToken(findAdmin?._id);
			const updateAdmin = await User.findByIdAndUpdate(
				findAdmin.id,
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
				_id: findAdmin?._id,
				name: findAdmin?.name,
				email: findAdmin?.email,
				mobile: findAdmin?.mobile,
				token: generateToken(findAdmin?._id),
			});
		} else {
			res.status(500).json({
				message: "Invalid Email or Password",
				success: false,
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
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
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// user address

export const saveAddress = async (req, res) => {
	const { _id } = req.user;
	try {
		const updateUser = await User.findByIdAndUpdate(
			_id,
			{
				address: req?.body?.address,
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
		res.status(500).json({ error: "Internal Server Error" });
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
		res.status(500).json({ error: "Internal Server Error" });
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
		res.status(500).json({ error: "Internal Server Error" });
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
		res.status(500).json({ error: "Internal Server Error" });
	}
};

//update password

export const updatePassword = async (req, res) => {
	const { _id } = req.user;
	const { password } = req.body;
	validateUserId(_id);
	const user = await User.findById(_id);
	if (password) {
		user.password = password;
		const updatePassword = await user.save();
		res.json(updatePassword);
	} else {
		res.json(user);
	}
};

// generate forgot password token

export const forgotPasswordToken = async (req, res) => {
	const { email } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		res.status(500).json({
			message: "User Not Found with this Email",
		});
	}
	try {
		const token = await user.createPasswordResetToken();
		await user.save();
		const resetUrl = `Hi please follow this link to resest your account password, this link is valid for 10 minutes from now <a href="http://localhost:3000/api/user/reset-password/${token}">Click Here</a>`;
		const data = {
			to: email,
			text: "Hey User",
			subject: "Forgot Password Link",
			htm: resetUrl,
		};
		sendMail(data);
		res.json(token);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// reset password

export const resetPassword = async (req, res) => {
	const { password } = req.body;
	const { token } = req.params;
	const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
	const user = await User.findOne({
		passwordResetToken: hashedToken,
		passwordResetExpire: { $gt: Date.now() },
	});
	if (!user) {
		res.status(500).json({
			message: "Token Expired, Please try again later",
		});
	}
	user.password = password;
	user.passwordResetToken = undefined;
	user.passwordResetExpire = undefined;
	await user.save();
	res.json(user);
};

// get wishlist

export const getWishlist = async (req, res) => {
	const { _id } = req.user;
	validateUserId(_id);
	try {
		const findUser = await User.findById(_id).populate("wishlist");
		res.json(findUser);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const userCart = async (req, res) => {
	const { cart } = req.body;
	const { _id } = req.user;
	validateUserId(_id);
	try {
		const user = await User.findById(_id);
		const alreadyExistInCart = await Cart.findOne({ orderBy: user._id });
		if (alreadyExistInCart) {
			alreadyExistInCart.remove();
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
