import mongoose from "mongoose";

let cartSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		productId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product",
		},
		quantity: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		color: {
			type: [],
		},
	},
	{ timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
