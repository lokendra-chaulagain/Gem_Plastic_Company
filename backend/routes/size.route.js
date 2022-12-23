import { Router } from "express";
const router = Router();
import { createSize, deleteSize, getAllSize, getSizeById, updateSize } from "../controllers/size.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

router.post("/",verifyToken, createSize);
router.put("/:id",verifyToken, updateSize);
router.get("/:id", getSizeById);
router.get("/", getAllSize);
router.delete("/:id",verifyToken, deleteSize);

export default router;
