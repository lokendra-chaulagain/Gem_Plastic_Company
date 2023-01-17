import { Router } from "express";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";
import { createProduct, deleteProduct, getAllProduct, getAllProductForAdmin, getProductById, updateProduct } from "../controllers/product.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

router.post("/", uploadFile("thumbnail"),verifyToken, createProduct);
router.put("/:id", uploadFile("thumbnail"),verifyToken, updateProduct);
router.get("/single/:id", getProductById);
router.get("/", getAllProduct);
router.get("/forAdmin/", getAllProductForAdmin);
router.delete("/:id",verifyToken, deleteProduct);

export default router;
