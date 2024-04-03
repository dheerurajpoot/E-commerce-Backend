import express from "express";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";
import {
	createBrand,
	deleteBrand,
	getAllBrand,
	getBrand,
	updateBrand,
} from "../controllers/brandController.js";
const router = express.Router();

router.post("/", auth, isAdmin, createBrand);
router.put("/:id", auth, isAdmin, updateBrand);
router.delete("/:id", auth, isAdmin, deleteBrand);
router.get("/", getAllBrand);
router.get("/:id", getBrand);

export default router;
