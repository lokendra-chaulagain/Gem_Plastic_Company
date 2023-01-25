import { Router } from "express";
const router = Router();
import { createSize, deleteSize, getAllSize, getSizeById, updateSize } from "../controllers/size.controller.js";

router.post("/", createSize);
router.put("/:id", updateSize);
router.get("/:id", getSizeById);
router.get("/", getAllSize);
router.delete("/:id", deleteSize);

export default router;
