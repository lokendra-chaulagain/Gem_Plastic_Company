import { Router } from "express";
import { deleteUser, getUser, loginUser, registerUser, verifyToken } from "../controllers/user.controller.js";
const router = Router();

router.post("/signup", registerUser);
router.post("/signin", loginUser);
router.get("/", getUser);
router.delete("/:id", verifyToken, deleteUser);

export default router;
