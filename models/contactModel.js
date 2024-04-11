import mongoose from "mongoose";

let contactSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		mobile: {
			type: String,
			required: true,
		},
		comment: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			default: "Received",
			enum: ["Received", "In Progress", "Solved"],
		},
		date: {
			type: String,
		},
	},
	{ timestamps: true }
);

//Export the model
export const Contact = mongoose.model("Contact", contactSchema);
