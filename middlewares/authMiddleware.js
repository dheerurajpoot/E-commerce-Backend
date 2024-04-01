import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import "dotenv/config";

export const auth = async (req, res, next) => {
	let token;
	if (req?.headers?.authorization?.startsWith("Bearer")) {
		token = req.headers.authorization.split(" ")[1];
		try {
			if (token) {
				const decoded = jwt.verify(token, process.env.JWT_SECRET);
				const decodedUser = await User.findById(decoded?.id);
				req.user = decodedUser;
				next();
			}
		} catch (error) {
			console.log(error);
			res.status(500).json({
				message: "Token Expired, Please Login Again",
				success: false,
			});
		}
	} else {
		res.status(500).json({
			message: "There is no token attached with headers",
			succuss: false,
		});
	}
};

export const isAdmin = async (req, res, next) => {
	const { email } = await req.user;
	const adminUser = await User.findOne({ email });
	if (adminUser.role !== "admin") {
		res.status(500).json({
			message: "You are not an Admin",
			success: false,
		});
	} else {
		next();
	}
};
