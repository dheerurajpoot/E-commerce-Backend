import { Color } from "../models/colorModel.js";
import { validateUserId } from "../utils/validateUserId.js";

export const createColor = async (req, res) => {
	try {
		const newColor = await Color.create(req.body);
		res.status(201).json(newColor);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const updateColor = async (req, res) => {
	const { id } = req.params;
	validateUserId(id);
	try {
		const updatedColor = await Color.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (!updatedColor) {
			return res.status(404).json({ message: "Color not found" });
		}
		res.json(updatedColor);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const deleteColor = async (req, res) => {
	const { id } = req.params;
	validateUserId(id);
	try {
		const deletedColor = await Color.findByIdAndDelete(id);
		if (!deletedColor) {
			return res.status(404).json({ message: "Color not found" });
		}
		res.json(deletedColor);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const getColor = async (req, res) => {
	const { id } = req.params;
	validateUserId(id);
	try {
		const color = await Color.findById(id);
		if (!color) {
			return res.status(404).json({ message: "Color not found" });
		}
		res.json(color);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const getAllColor = async (req, res) => {
	try {
		const allColors = await Color.find();
		res.json(allColors);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};
