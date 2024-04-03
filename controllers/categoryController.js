import { Category } from "../models/categoryModel.js";
import { validateUserId } from "../utils/validateUserId.js";

export const createCategory = async (req, res) => {
	try {
		const newCategory = await Category.create(req.body);
		res.json(newCategory);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

// update category
export const updateCategory = async (req, res) => {
	const { id } = req.params;
	validateUserId(id);
	try {
		const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.json(updatedCategory);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

// delete category

export const deleteCategory = async (req, res) => {
	const { id } = req.params;
	validateUserId(id);
	try {
		const deletedCategory = await Category.findByIdAndDelete(id);
		res.json(deletedCategory);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

// get category

export const getCategory = async (req, res) => {
	const { id } = req.params;
	validateUserId(id);
	try {
		const getCategory = await Category.findById(id);
		res.json(getCategory);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

// get all category

export const getAllCategory = async (req, res) => {
	try {
		const getAllCategory = await Category.find();
		res.json(getAllCategory);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal server error" });
	}
};
