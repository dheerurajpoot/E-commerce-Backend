import slugify from "slugify";
import { Product } from "../models/productModel.js";
import { User } from "../models/userModel.js";

export const createProduct = async (req, res) => {
	try {
		if (req.body.title) {
			req.body.slug = slugify(req.body.title);
		}
		const newProduct = await Product.create(req.body);
		res.status(200).json(newProduct);
	} catch (error) {
		console.log(error);
	}
};

// get a product

export const getProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const findProduct = await Product.findById(id);
		res.status(200).json(findProduct);
	} catch (error) {
		console.log(error);
	}
};

// get all products
export const getAllProducts = async (req, res) => {
	try {
		const queryObj = { ...req.query };
		const getAllProduct = await Product.find(queryObj);
		res.status(200).json(getAllProduct);
	} catch (error) {
		console.log(error);
	}
};

//  update product

export const updateProduct = async (req, res) => {
	const { id } = req.params;
	try {
		if (req.body.title) {
			req.body.slug = slugify(req.body.title);
		}
		const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.status(200).json(updatedProduct);
	} catch (error) {
		console.log(error);
	}
};

// delete product

export const deleteProduct = async (req, res) => {
	const { id } = req.params;
	try {
		const deletedProduct = await Product.findByIdAndDelete(id);
		res.status(200).json(deletedProduct);
	} catch (error) {
		console.log(error);
	}
};

export const addToWishlist = async (req, res) => {
	const { _id } = req.user;
	const { productId } = req.body;
	try {
		const user = await User.findById(_id);
		const alreadyAdded = user.wishlist.find(
			(id) => id.toString() === productId
		);
		if (alreadyAdded) {
			let user = await User.findByIdAndUpdate(
				_id,
				{
					$pull: { wishlist: productId },
				},
				{ new: true }
			);
			res.json(user);
		} else {
			let user = await User.findByIdAndUpdate(
				_id,
				{
					$push: { wishlist: productId },
				},
				{ new: true }
			);
			res.json(user);
		}
	} catch (error) {
		console.log(error);
	}
};
