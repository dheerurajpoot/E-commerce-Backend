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
			default: "Not Processed",
			enum: [
				"Not Processed",
				"Cash On Delivery",
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
