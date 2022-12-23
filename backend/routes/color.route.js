import { Router } from "express";
const router = Router();
import { createColor, deleteColor, getAllColor, getColorById, updateColor } from "../controllers/color.controller.js";

router.post("/", createColor);
router.put("/:id", updateColor);
router.get("/:id", getColorById);
router.get("/", getAllColor);
router.delete("/:id", deleteColor);

export default router;
