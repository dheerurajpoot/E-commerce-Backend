import express from "express";
import {
	createUser,
	deleteUser,
	forgotPasswordToken,
	getAllUsers,
	getUser,
	logOut,
	refreshTokenHandler,
	resetPassword,
	updatePassword,
	updateUser,
	userLogin,
} from "../controllers/userController.js";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/password", auth, updatePassword);
router.post("/login", userLogin);
router.put("/update-user", auth, updateUser);
router.get("/allusers", auth, isAdmin, getAllUsers);
router.get("/refresh", refreshTokenHandler);
router.get("/logout", logOut);
router.get("/:id", auth, getUser);
router.delete("/:id", deleteUser);

export default router;
