import { Router } from "express";
const router = Router();
import { createCmsContent, deleteCmsContent, getCmsContentById, getAllCmsContent, updateCmsContent } from "../controllers/cms.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

router.post("/",verifyToken, createCmsContent);
router.put("/:id",verifyToken, updateCmsContent);
router.get("/:id", getCmsContentById);
router.get("/", getAllCmsContent);
router.delete("/:id",verifyToken, deleteCmsContent);

export default router;
