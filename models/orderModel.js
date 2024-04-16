import mongoose from "mongoose";

let orderSchema = new mongoose.Schema(
	{
		products: [
			{
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Product",
				},
				count: Number,
				color: String,
			},
		],
		paymentIntent: {},
		orderStatus: {
			type: String,
			default: "Shipped",
			enum: [
				"Shipped",
				"Processing",
				"Dispatched",
				"Cancelled",
				"Delivered",
			],
		},
		orderBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
