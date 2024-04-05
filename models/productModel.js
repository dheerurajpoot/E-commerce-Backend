import mongoose from "mongoose";

let productSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
		},
		quantity: {
			type: Number,
			required: true,
		},
		sold: {
			type: Number,
			default: 0,
		},
		images: [],
		color: [],
		tags: [],
		rating: [
			{
				star: Number,
				comment: String,
				postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
			},
		],
		totalRating: {
			type: String,
			default: 0,
		},
	},
	{ timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
