import { Router } from "express";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";
import { createReview, deleteReview, getAllReview, getReviewById, updateReview } from "../controllers/review.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

router.post("/",uploadFile("thumbnail"),verifyToken, createReview);
router.put("/:id",uploadFile("thumbnail"),verifyToken, updateReview);
router.get("/:id", getReviewById);
router.get("/", getAllReview);
router.delete("/:id",verifyToken, deleteReview);

export default router;
