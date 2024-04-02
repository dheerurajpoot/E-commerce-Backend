import express from "express";
import {
	createProduct,
	deleteProduct,
	getAllProducts,
	getProduct,
	updateProduct,
} from "../controllers/productController.js";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", auth, isAdmin, createProduct);
router.get("/allproducts", getAllProducts);
router.put("/:id", auth, isAdmin, updateProduct);
router.delete("/:id", auth, isAdmin, deleteProduct);
router.get("/:id", getProduct);

export default router;
