import mongoose from "mongoose";

let couponSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		upporcase: true,
	},
	expiry: {
		type: Date,
		required: true,
	},
	discount: {
		type: Number,
		required: true,
	},
});

export const Coupon = mongoose.model("Coupon", couponSchema);
