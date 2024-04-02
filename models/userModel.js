import mongoose from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";

let userSchema = new mongoose.Schema(
	{
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
		isBlocked: {
			type: Boolean,
			default: false,
		},
		cart: {
			type: Array,
			default: [],
		},
		address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
		wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
		refreshToken: {
			type: String,
		},
		passwordChangesAt: Date,
		passwordResetToken: String,
		passwordResetExpire: Date,
	},
	{ timestamps: true }
);

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}
	const salt = bcrypt.genSaltSync(10);
	this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.createPasswordResetToken = async function () {
	const resetToken = crypto.randomBytes(32).toString("hex");
	this.passwordResetToken = crypto
		.createHash("sha256")
		.update(resetToken)
		.digest("hex");
	this.passwordResetExpire = Date.now() + 30 * 60 * 1000;
	return resetToken;
};

export const User = mongoose.model("User", userSchema);
