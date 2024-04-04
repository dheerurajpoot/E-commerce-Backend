import { Coupon } from "../models/couponModel.js";
import { validateUserId } from "../utils/validateUserId.js";

export const createCoupon = async (req, res) => {
	try {
		const newCoupon = await Coupon.create(req.body);
		res.json(newCoupon);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// get coupon
export const getAllCoupon = async (req, res) => {
	try {
		const allCoupon = await Coupon.find();
		res.json(allCoupon);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
// update coupon
export const updateCoupon = async (req, res) => {
	try {
		const { id } = req.params;
		validateUserId(id);
		const updatedCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.json(updatedCoupon);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
// delete coupon
export const deleteCoupon = async (req, res) => {
	try {
		const { id } = req.params;
		validateUserId(id);
		const deletedCoupon = await Coupon.findByIdAndDelete(id);
		res.json(deletedCoupon);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
