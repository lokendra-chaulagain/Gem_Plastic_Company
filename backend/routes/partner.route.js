import { Router } from "express";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";
import { createPartner, deletePartner, getAllPartner, getPartnerById, updatePartner } from "../controllers/partner.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

router.post("/",  uploadFile("thumbnail"),verifyToken,createPartner);
router.put("/:id", uploadFile("thumbnail"),verifyToken, updatePartner);
router.get("/:id", getPartnerById);
router.get("/", getAllPartner);
router.delete("/:id",verifyToken, deletePartner);

export default router;
