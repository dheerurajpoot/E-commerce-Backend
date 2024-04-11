import express from "express";
import { deleteImages, uploadImages } from "../controllers/uploadController.js";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";
import { productImgResize, uploadPhoto } from "../middlewares/uploadImg.js";

const router = express.Router();

router.post(
	"/",
	auth,
	isAdmin,
	uploadPhoto.array("images", 10),
	productImgResize,
	uploadImages
);

router.delete("/:id", auth, isAdmin, deleteImages);

export default router;
