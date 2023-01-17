import { Router } from "express";
const router = Router();
import { getAll, getAllCountData } from "../controllers/miscellaneous.controller.js";

router.get("/", getAll);
router.get("/getAllCountData", getAllCountData);

export default router;
