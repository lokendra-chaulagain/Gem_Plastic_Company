import { Router } from "express";
const router = Router();
import { createContact, updateContact, deleteContact, getContactById, getAllContact } from "../controllers/contact.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

router.post("/", createContact);
router.put("/:id",verifyToken, updateContact);
router.get("/:id",verifyToken, getContactById);
router.get("/",verifyToken, getAllContact);
router.delete("/:id",verifyToken, deleteContact);

export default router;
