import express from "express";
import {
	createUser,
	deleteUser,
	getAllUsers,
	getUser,
	logOut,
	refreshTokenHandler,
	updateUser,
	userLogin,
} from "../controllers/userController.js";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/login", userLogin);
router.put("/update-user", auth, updateUser);
router.get("/allusers", auth, isAdmin, getAllUsers);
router.get("/refresh", refreshTokenHandler);
router.get("/logout", logOut);
router.get("/:id", auth, getUser);
router.delete("/:id", deleteUser);

export default router;
