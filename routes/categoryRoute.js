import express from "express";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";
import {
	createCategory,
	deleteCategory,
	getAllCategory,
	getCategory,
	updateCategory,
} from "../controllers/categoryController.js";
const router = express.Router();

router.post("/", auth, isAdmin, createCategory);
router.put("/:id", auth, isAdmin, updateCategory);
router.delete("/:id", auth, isAdmin, deleteCategory);
router.get("/", getAllCategory);
router.get("/:id", getCategory);

export default router;
