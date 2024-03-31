import mongoose from "mongoose";
import bcrypt from "bcrypt";

let userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	mobile: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		default: "user",
	},
});

userSchema.pre("save", async function (next) {
	const salt = bcrypt.genSaltSync(10);
	this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

export const User = mongoose.model("User", userSchema);
