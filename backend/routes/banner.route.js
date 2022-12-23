import { Router } from "express";
const router = Router();
import {uploadFile} from '../utils/uploadFile.js'
import { createBanner, deleteBanner, getAllBanner, getBannerById, updateBanner } from "../controllers/banner.controller.js"
import { verifyToken } from "../controllers/user.controller.js";

router.post("/",uploadFile('thumbnail'),verifyToken, createBanner);
router.put("/:id",uploadFile('thumbnail'),verifyToken, updateBanner);
router.get("/:id", getBannerById);
router.get("/",getAllBanner);
router.delete("/:id",verifyToken, deleteBanner);

export default router;
