import { generateToken } from "../config/generateToken.js";
import { User } from "../models/userModel.js";

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

export const userLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		const findUser = await User.findOne({ email });
		if (findUser && (await findUser.isPasswordMatched(password))) {
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
