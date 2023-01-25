import { Router } from "express";
const router = Router();
import { createCmsContent, deleteCmsContent, getCmsContentById, getAllCmsContent, updateCmsContent } from "../controllers/cms.controller.js";

router.post("/", createCmsContent);
router.put("/:id", updateCmsContent);
router.get("/:id", getCmsContentById);
router.get("/", getAllCmsContent);
router.delete("/:id", deleteCmsContent);

export default router;
