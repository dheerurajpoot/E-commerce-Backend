import mongoose from "mongoose";

let cartSchema = new mongoose.Schema(
	{
		products: [
			{
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Product",
				},
				count: Number,
				color: String,
				price: Number,
			},
		],
		total: Number,
		totalAfterDiscount: Number,
		orderBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
