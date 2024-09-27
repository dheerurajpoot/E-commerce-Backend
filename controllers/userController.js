import { generateRefreshToken } from "../config/generateRefreshToken.js";
import { generateToken } from "../config/generateToken.js";
import { User } from "../models/userModel.js";
import { validateUserId } from "../utils/validateUserId.js";
import jwt from "jsonwebtoken";
import { sendMail } from "./mailController.js";
import crypto from "crypto";
import { Cart } from "../models/cartModel.js";
import { Order } from "../models/orderModel.js";
import { registerMail } from "../config/registerMailFormate.js";
import { orderMail } from "../config/orderMail.js";
import { orderStatusMail } from "../config/orderStatusMail.js";
// import { Product } from "../models/productModel.js";
// import { Coupon } from "../models/couponModel.js";
// import uniqid from "uniqid";
import rateLimit from "express-rate-limit";

const isValidEmailFormat = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

export const limitUsers = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 createUser requests per windowMs
	message: {
		message:
			"Too many accounts created from this IP, please try again after 15 minutes",
		success: false,
	},
});

export const createUser = async (req, res) => {
	try {
		const { name, email } = req.body;

		// Validate email format
		if (!isValidEmailFormat(email)) {
			return res.status(400).json({
				message: "Please enter a valid email!",
				success: false,
			});
		}

		const findUser = await User.findOne({ email });
		if (!findUser) {
			const newUser = await User.create(req.body);
			if (newUser) {
				let data = {
					to: email,
					subject: `Verification Mail from DR Store`,
					text: "",
					html: registerMail(name, newUser?._id),
				};
				sendMail(data);
			}
			res.status(200).json(newUser);
		} else {
			res.status(500).json({
				message: "User Already exist with this Email!",
				success: false,
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// verify user email

export const verifyEmail = async (req, res) => {
	const { id } = req.params;
	try {
		await User.updateOne(
			{ _id: id },
			{
				$set: { isVerified: true },
			}
		);
		res.status(200).json({
			message: "Mail verified Sucessfully",
			success: true,
		});
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
		if (!findUser?.isVerified) {
			res.status(500).json({
				message: "Please Verify your email first...",
				success: false,
			});
			return;
		}
		if (
			findUser &&
			(await findUser.isPasswordMatched(password)) &&
			findUser?.isVerified
		) {
			const refreshToken = generateRefreshToken(findUser?._id);
			await User.findByIdAndUpdate(
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
		if (!findAdmin) {
			return res.status(301).json({
				message: "You are not Registered!",
			});
		}
		if (findAdmin.role !== "admin") {
			return res.status(301).json({
				message: "You are not Authorised!",
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
			return res.status(200).json({
				_id: findAdmin?._id,
				name: findAdmin?.name,
				email: findAdmin?.email,
				mobile: findAdmin?.mobile,
				token: generateToken(findAdmin?._id),
			});
		} else {
			return res.status(500).json({
				message: "Invalid Email or Password",
				success: false,
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
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
		const resetUrl = `Hi please follow this link to resest your account password, this link is valid for 10 minutes from now <a href="https://drstore.vercel.app/reset-password/${token}">Click Here</a>`;
		const data = {
			to: email,
			text: "",
			subject: "Forgot Password Link",
			html: resetUrl,
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

// user cart

export const userCart = async (req, res) => {
	const { productId, color, quantity, price } = req.body;
	const { _id } = req.user;
	validateUserId(_id);
	try {
		let newCart = await new Cart({
			userId: _id,
			productId,
			color,
			quantity,
			price,
		}).save();
		res.status(200).json(newCart);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// get user cart

export const getUserCart = async (req, res) => {
	const { _id } = req.user;
	validateUserId(_id);
	try {
		const cart = await Cart.find({ userId: _id }).populate("productId");
		res.json(cart);
	} catch (error) {
		console.log(error);
	}
};

// remove cart products

export const removeCartItem = async (req, res) => {
	const { _id } = req.user;
	const { id } = req.params;
	validateUserId(_id);
	try {
		const deletedCartItem = await Cart.deleteOne({
			userId: _id,
			_id: id,
		});
		res.json(deletedCartItem);
	} catch (error) {
		console.log(error);
	}
};

// empty user cart

export const emptyUserCart = async (req, res) => {
	const { _id } = req.user;
	validateUserId(_id);
	try {
		const cartItems = await Cart.find({ userId: _id });
		await Cart.deleteMany({ userId: _id });

		res.json({ message: "Cart emptied successfully" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// update cart product quantity

export const updateCartProductQty = async (req, res) => {
	const { _id } = req.user;
	const { id, newquantity } = req.params;
	validateUserId(_id);
	try {
		const cartItem = await Cart.findOne({
			userId: _id,
			_id: id,
		});
		cartItem.quantity = newquantity;
		cartItem.save();
		res.json(cartItem);
	} catch (error) {
		console.log(error);
	}
};

// create orders

export const createOrder = async (req, res) => {
	const {
		shippingInfo,
		orderItems,
		totalPrice,
		priceAfterDiscount,
		paymentInfo,
	} = req.body;
	const { _id, email, name } = req.user;
	validateUserId(_id);
	try {
		const order = await Order.create({
			shippingInfo,
			orderItems,
			totalPrice,
			priceAfterDiscount,
			paymentInfo,
			user: _id,
		});
		if (order) {
			let data = {
				to: email,
				text: "",
				subject: "Your Order is Successfully Placed!",
				html: orderMail(name),
			};
			sendMail(data);
		}
		res.json({
			order,
			success: true,
		});
	} catch (error) {
		console.log(error);
	}
};

// get orders

export const getUserOrder = async (req, res) => {
	try {
		const { _id } = req.user;
		validateUserId(_id);
		const userOrder = await Order.find({ user: _id })
			.populate("user")
			.populate("orderItems.product");
		res.status(200).json({ userOrder });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// // apply coupon

// export const applyCoupon = async (req, res) => {
// 	const { coupon } = req.body;
// 	const { _id } = req.user;
// 	validateUserId(_id);
// 	const validCoupon = await Coupon.findOne({ name: coupon });
// 	if (validCoupon === null) {
// 		res.status(500).json({
// 			message: "Invalid Coupon",
// 		});
// 	}
// 	const user = await User.findOne({ _id });
// 	let { cartTotal } = await Cart.findOne({
// 		orderBy: user._id,
// 	}).populate("products.product");
// 	let totalAfterDiscount = (
// 		cartTotal -
// 		(cartTotal * validCoupon.discount) / 100
// 	).toFixed(2);
// 	console.log(totalAfterDiscount);
// 	await Cart.findOneAndUpdate(
// 		{ orderBy: user._id },
// 		{ totalAfterDiscount },
// 		{ new: true }
// 	);
// 	res.status(200).json(totalAfterDiscount);
// };

// get all orders

export const getAllOrder = async (req, res) => {
	try {
		const allOrders = await Order.find()
			.populate("orderItems.product")
			.populate("user")
			.exec();
		res.status(200).json(allOrders);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// update order status

export const updateOrderStatus = async (req, res) => {
	const { status, email } = req.body;
	const { id } = req.params;
	validateUserId(id);
	try {
		const orderStatus = await Order.findByIdAndUpdate(
			id,
			{
				orderStatus: status,
			},
			{
				new: true,
			}
		);
		let data = {
			to: email,
			text: "",
			subject: "Your Order Status is Updated!",
			html: orderStatusMail(status),
		};
		sendMail(data);
		res.json(orderStatus);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
