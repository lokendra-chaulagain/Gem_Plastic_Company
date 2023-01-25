import { Router } from "express";
import { deleteUser, getUser, loginUser, registerUser,  } from "../controllers/user.controller.js";
const router = Router();

router.post("/signup", registerUser);
router.post("/signin", loginUser);
router.get("/", getUser);
router.delete("/:id", deleteUser);
// router.get("/:id/verify/:token", emailVerifyRoute);

export default router;
