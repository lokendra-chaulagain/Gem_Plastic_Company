import { Router } from "express";
const router = Router();
import { createCategory, deleteCategory, getAllCategory, getCategoryById, updateCategory } from "../controllers/category.controller.js";
import { verifyToken } from "../controllers/user.controller.js";
import { uploadFile } from "../utils/uploadFile.js";

router.post("/", uploadFile("thumbnail"),verifyToken, createCategory);
router.put("/:id", uploadFile("thumbnail"),verifyToken, updateCategory);
router.get("/:id", getCategoryById);
router.get("/", getAllCategory);
router.delete("/:id",verifyToken, deleteCategory);

export default router;
