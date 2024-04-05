import { Contact } from "../models/contactModel.js";
import { validateUserId } from "../utils/validateUserId.js";

export const createContact = async (req, res) => {
	try {
		const newContact = await Contact.create(req.body);
		res.status(201).json(newContact);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const updateContact = async (req, res) => {
	const { id } = req.params;
	validateUserId(id);
	try {
		const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (!updatedContact) {
			return res.status(404).json({ message: "Contact not found" });
		}
		res.json(updatedContact);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const deleteContact = async (req, res) => {
	const { id } = req.params;
	validateUserId(id);
	try {
		const deletedContact = await Contact.findByIdAndDelete(id);
		if (!deletedContact) {
			return res.status(404).json({ message: "Contact not found" });
		}
		res.json(deletedContact);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const getContact = async (req, res) => {
	const { id } = req.params;
	validateUserId(id);
	try {
		const contact = await Contact.findById(id);
		if (!contact) {
			return res.status(404).json({ message: "Contact not found" });
		}
		res.json(contact);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const getAllContact = async (req, res) => {
	try {
		const allContacts = await Contact.find();
		res.json(allContacts);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};
