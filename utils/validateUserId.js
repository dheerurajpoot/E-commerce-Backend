import mongoose from "mongoose";

export const validateUserId = (id) => {
	const isValid = mongoose.Types.ObjectId.isValid(id);
	if (!isValid) {
		console.log("Your ID is Invalid or not found ");
	}
};
