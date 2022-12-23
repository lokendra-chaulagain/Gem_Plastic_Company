import { Router } from "express";
import { deleteUser, loginUser, registerUser, verifyToken } from "../controllers/user.controller.js";
const router = Router();

router.post("/signup", registerUser);
router.post("/signin", loginUser);
router.delete("/:id", verifyToken, deleteUser);

export default router;
