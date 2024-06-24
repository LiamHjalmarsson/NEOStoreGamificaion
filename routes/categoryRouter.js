import { Router } from "express";
import { createCategory, deleteCategory, getAllCategories, getCategory, updateCategory } from "../controllers/categoryController.js";
import { validateParamsCategory, validateCategoryInput } from "../middleware/validationMiddleware.js";

const router = Router();

router.get("/", getAllCategories);
router.post("/", validateCategoryInput, createCategory);
router.get("/:id", validateParamsCategory, getCategory);
router.patch("/:id", validateParamsCategory, updateCategory);
router.delete("/:id", validateParamsCategory, deleteCategory);

export default router;