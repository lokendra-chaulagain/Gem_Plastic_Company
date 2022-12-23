import { Router } from "express";
const router = Router();
import { createSubscriber, deleteSubscriber, getAllSubscriber } from "../controllers/subscriber.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

router.post("/", createSubscriber);
router.get("/",verifyToken, getAllSubscriber);
router.delete("/:id",verifyToken, deleteSubscriber);

export default router;
