import { Router } from "express";
const router = Router();
import { createStandard, deleteStandard, getAllStandard, getStandardById, updateStandard } from "../controllers/standard.controller.js";

router.post("/", createStandard);
router.put("/:id", updateStandard);
router.get("/:id", getStandardById);
router.get("/", getAllStandard);
router.delete("/:id", deleteStandard);

export default router;
