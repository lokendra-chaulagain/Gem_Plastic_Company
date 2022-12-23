import { Router } from "express";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";
import { createVacancy, deleteVacancy, getAllVacancy, getVacancyById, updateVacancy } from "../controllers/vacancy.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

router.post("/", uploadFile("thumbnail"), verifyToken, createVacancy);
router.put("/:id", uploadFile("thumbnail"), updateVacancy);
router.get("/:id", getVacancyById);
router.get("/", getAllVacancy);
router.delete("/:id", verifyToken, deleteVacancy);

export default router;
