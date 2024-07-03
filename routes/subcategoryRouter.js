import { Router } from "express";
import upload from "../middleware/multerMIddleware.js";
import { createSubcategory, deleteSubcategory, getSubcategories, getSubcategory, updateSubcategory } from "../controllers/subcategoryController.js";

let router = Router();

router.get("/", getSubcategories);
router.post("/", upload.single("image"), createSubcategory);
router.get("/:id", getSubcategory);
router.patch("/:id", upload.single("image"), updateSubcategory);
router.delete("/:id", deleteSubcategory);

export default router;