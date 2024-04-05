import express from "express";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";
import {
	createColor,
	deleteColor,
	getAllColor,
	getColor,
	updateColor,
} from "../controllers/colorController.js";
const router = express.Router();

router.post("/", auth, isAdmin, createColor);
router.put("/:id", auth, isAdmin, updateColor);
router.delete("/:id", auth, isAdmin, deleteColor);
router.get("/", getAllColor);
router.get("/:id", getColor);

export default router;
