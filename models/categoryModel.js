import mongoose from "mongoose";

let categorySchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
			index: true,
		},
	},
	{
		timestamps: true,
	}
);

export const Category = mongoose.model("Category", categorySchema);
