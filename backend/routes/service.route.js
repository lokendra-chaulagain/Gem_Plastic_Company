import { Router } from "express";
const router = Router();
import { createService, deleteService, getAllService, getServiceById, updateService } from "../controllers/service.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

router.post("/",verifyToken, createService);
router.put("/:id",verifyToken, updateService);
router.get("/:id", getServiceById);
router.get("/", getAllService);
router.delete("/:id",verifyToken, deleteService);

export default router;
