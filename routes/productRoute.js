import express from "express";
import {
	addToWishlist,
	createProduct,
	deleteProduct,
	getAllProducts,
	getProduct,
	rating,
	updateProduct,
	uploadImages,
} from "../controllers/productController.js";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";
import { productImgResize, uploadPhoto } from "../middlewares/uploadImg.js";

const router = express.Router();

router.post("/", auth, isAdmin, createProduct);
router.put(
	"/upload/:id",
	auth,
	isAdmin,
	uploadPhoto.array("images", 10),
	productImgResize,
	uploadImages
);
router.get("/allproducts", getAllProducts);
router.get("/:id", getProduct);
router.put("/wishlist", auth, addToWishlist);
router.put("/rating", auth, rating);
router.put("/:id", auth, isAdmin, updateProduct);
router.delete("/:id", auth, isAdmin, deleteProduct);

export default router;
