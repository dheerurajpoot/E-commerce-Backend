import express from "express";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";
import {
	createCoupon,
	deleteCoupon,
	getAllCoupon,
	updateCoupon,
} from "../controllers/couponController.js";

const router = express.Router();

router.post("/", auth, isAdmin, createCoupon);
router.get("/", auth, isAdmin, getAllCoupon);
router.put("/:id", auth, isAdmin, updateCoupon);
router.delete("/:id", auth, isAdmin, deleteCoupon);

export default router;
