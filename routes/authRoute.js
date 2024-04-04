import express from "express";
import {
	adminLogin,
	createUser,
	deleteUser,
	forgotPasswordToken,
	getAllUsers,
	getUser,
	getWishlist,
	logOut,
	refreshTokenHandler,
	resetPassword,
	saveAddress,
	updatePassword,
	updateUser,
	userCart,
	userLogin,
} from "../controllers/userController.js";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/password", auth, updatePassword);
router.post("/login", userLogin);
router.post("/login-admin", adminLogin);
router.post("/cart", userCart);
router.put("/update-user", auth, updateUser);
router.put("/address", auth, saveAddress);
router.get("/allusers", auth, isAdmin, getAllUsers);
router.get("/refresh", refreshTokenHandler);
router.get("/logout", logOut);
router.get("/wishlist", auth, getWishlist);
router.get("/:id", auth, getUser);
router.delete("/:id", deleteUser);

export default router;
