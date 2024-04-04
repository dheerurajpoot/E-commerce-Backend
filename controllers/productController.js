import slugify from "slugify";
import { Product } from "../models/productModel.js";
import { User } from "../models/userModel.js";
import { validateUserId } from "../utils/validateUserId.js";
import { cloudinaryImgUpload } from "../utils/cloudinary.js";
import fs from "fs";

export const createProduct = async (req, res) => {
	try {
		if (req.body.title) {
			req.body.slug = slugify(req.body.title);
		}
		const newProduct = await Product.create(req.body);
		res.status(200).json(newProduct);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
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
		res.status(500).json({ error: "Internal Server Error" });
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
		res.status(500).json({ error: "Internal Server Error" });
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
		res.status(500).json({ error: "Internal Server Error" });
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
		res.status(500).json({ error: "Internal Server Error" });
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
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// rating

export const rating = async (req, res) => {
	const { _id } = req.user;
	const { star, productId, comment } = req.body;
	try {
		const product = await Product.findById(productId);
		const alreadyRated = product.rating.find(
			(userId) => userId.postedBy.toString() === _id.toString()
		);
		if (alreadyRated) {
			// Update the rating for the user if already rated
			let updateRating = await Product.updateOne(
				{
					"rating.postedBy": _id,
				},
				{
					$set: {
						"rating.$.star": star,
						"rating.$.comment": comment,
					},
				}
			);
			const ratingProduct = await Product.findById(productId);
			const totalRating = ratingProduct.rating.length;
			const ratingSum = ratingProduct.rating
				.map((item) => item.star)
				.reduce((prev, curr) => prev + curr, 0);
			let actualRating = Math.round(ratingSum / totalRating);
			let finalProduct = await Product.findByIdAndUpdate(
				productId,
				{
					totalRating: actualRating,
				},
				{ new: true }
			);
			res.json(finalProduct); // Send the updated product with total rating
		} else {
			// Add new rating if not already rated
			let rateProduct = await Product.findByIdAndUpdate(
				productId,
				{
					$push: {
						rating: {
							star: star,
							comment: comment,
							postedBy: _id,
						},
					},
				},
				{ new: true }
			);
			// Recalculate the average rating for the product after adding the new rating
			const ratingProduct = await Product.findById(productId);
			const totalRating = ratingProduct.rating.length + 1;
			const ratingSum =
				ratingProduct.rating
					.map((item) => item.star)
					.reduce((prev, curr) => prev + curr, 0) + star;
			let actualRating = Math.round(ratingSum / totalRating);
			let finalProduct = await Product.findByIdAndUpdate(
				productId,
				{
					totalRating: actualRating,
				},
				{ new: true }
			);
			res.json(finalProduct);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const uploadImages = async (req, res) => {
	const { id } = req.params;
	validateUserId(id);
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
		const findProduct = await Product.findByIdAndUpdate(
			id,
			{
				images: urls.map((file) => {
					return file;
				}),
			},
			{
				new: true,
			}
		);
		res.json(findProduct);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
