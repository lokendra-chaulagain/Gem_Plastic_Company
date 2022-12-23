import { Router } from "express";
const router = Router();
import { createStandard, deleteStandard, getAllStandard, getStandardById, updateStandard } from "../controllers/standard.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

router.post("/",verifyToken, createStandard);
router.put("/:id",verifyToken, updateStandard);
router.get("/:id", getStandardById);
router.get("/", getAllStandard);
router.delete("/:id",verifyToken, deleteStandard);

export default router;
