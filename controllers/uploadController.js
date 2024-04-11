import {
	cloudinaryImgDelete,
	cloudinaryImgUpload,
} from "../utils/cloudinary.js";
import fs from "fs";
import { validateUserId } from "../utils/validateUserId.js";

// image upload

export const uploadImages = async (req, res) => {
	try {
		const uploader = (path) => cloudinaryImgUpload(path, "images");
		const urls = [];
		const files = req.files;
		for (const file of files) {
			const { path } = file;
			const newPath = await uploader(path);
			urls.push(newPath);
			fs.unlinkSync(path);
		}
		const images = urls.map((file) => {
			return file;
		});
		res.json(images);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// image delete

export const deleteImages = async (req, res) => {
	const { id } = req.params;
	validateUserId(id);
	try {
		const deletedImg = cloudinaryImgDelete(id, "images");
		res.status(200).json({
			message: "Image Deleted Successfully",
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
