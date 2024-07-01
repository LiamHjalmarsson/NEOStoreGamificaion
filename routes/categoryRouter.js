import { Router } from "express";
import { createCategory, deleteCategory, getAllCategories, getCategory, updateCategory } from "../controllers/categoryController.js";
import { validateParamsCategory, validateCategoryInput } from "../middleware/validationMiddleware.js";
import upload from "../middleware/multerMIddleware.js";

const router = Router();

router.get("/", getAllCategories);
router.post("/", upload.single("image"), createCategory);
router.get("/:id", validateParamsCategory, getCategory);
router.patch("/:id", validateParamsCategory, updateCategory);
router.delete("/:id", validateParamsCategory, deleteCategory);

export default router;