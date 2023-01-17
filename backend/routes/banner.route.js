import { Router } from "express";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";
import { createBanner, deleteBanner, getAllBanner, getBannerById, updateBanner } from "../controllers/banner.controller.js";

router.post("/", uploadFile("thumbnail"), createBanner);
router.put("/:id", uploadFile("thumbnail"), updateBanner);
router.get("/:id", getBannerById);
router.get("/", getAllBanner);
router.delete("/:id", deleteBanner);

export default router;
