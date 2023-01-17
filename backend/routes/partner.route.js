import { Router } from "express";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";
import { createPartner, deletePartner, getAllPartner, getPartnerById, updatePartner } from "../controllers/partner.controller.js";

router.post("/", uploadFile("thumbnail"), createPartner);
router.put("/:id", uploadFile("thumbnail"), updatePartner);
router.get("/:id", getPartnerById);
router.get("/", getAllPartner);
router.delete("/:id", deletePartner);

export default router;
