import { Router } from "express";
const router = Router();
import { getAll } from "../controllers/miscellaneous.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

router.get("/",verifyToken, getAll);
// router.get("/", getAllCategoryProducts);


export default router;
