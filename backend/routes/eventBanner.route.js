import { Router } from "express";
const router = Router();
import {uploadFile} from '../utils/uploadFile.js'
import { createEventBanner, deleteEventBanner, getAllEventBanner, getEventBannerById, updateEventBanner } from "../controllers/eventBanner.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

router.post("/", uploadFile("thumbnail"),verifyToken, createEventBanner);
router.put("/:id",uploadFile("thumbnail"),verifyToken, updateEventBanner);
router.get("/:id", getEventBannerById);
router.get("/", getAllEventBanner);
router.delete("/:id",verifyToken, deleteEventBanner);

export default router;
