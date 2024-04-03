import { Brand } from "../models/brandModel.js";
import { validateUserId } from "../utils/validateUserId.js";

export const createBrand = async (req, res) => {
	try {
		const newBrand = await Brand.create(req.body);
		res.status(201).json(newBrand);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const updateBrand = async (req, res) => {
	const { id } = req.params;
	validateUserId(id);
	try {
		const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (!updatedBrand) {
			return res.status(404).json({ message: "Brand not found" });
		}
		res.json(updatedBrand);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const deleteBrand = async (req, res) => {
	const { id } = req.params;
	validateUserId(id);
	try {
		const deletedBrand = await Brand.findByIdAndDelete(id);
		if (!deletedBrand) {
			return res.status(404).json({ message: "Brand not found" });
		}
		res.json(deletedBrand);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const getBrand = async (req, res) => {
	const { id } = req.params;
	validateUserId(id);
	try {
		const brand = await Brand.findById(id);
		if (!brand) {
			return res.status(404).json({ message: "Brand not found" });
		}
		res.json(brand);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const getAllBrand = async (req, res) => {
	try {
		const allBrands = await Brand.find();
		res.json(allBrands);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};
