import express from "express";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";
import {
	createContact,
	deleteContact,
	getAllContact,
	getContact,
	updateContact,
} from "../controllers/contactController.js";
const router = express.Router();

router.post("/", createContact);
router.put("/:id", auth, isAdmin, updateContact);
router.delete("/:id", auth, isAdmin, deleteContact);
router.get("/", getAllContact);
router.get("/:id", getContact);

export default router;
