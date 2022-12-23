import { Router } from "express";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";
import { createBlog, deleteBlog, getAllBlog, getBlogById, updateBlog } from "../controllers/blog.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

router.post("/", uploadFile("thumbnail"),verifyToken, createBlog);
router.put("/:id",uploadFile("thumbnail"),verifyToken, updateBlog);
router.get("/:id", getBlogById);
router.get("/", getAllBlog);
router.delete("/:id",verifyToken, deleteBlog);

export default router;
