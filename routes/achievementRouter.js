import { Router } from "express";
import { createAchievement, deleteAchievement, getAchievements, updateAchievement } from "../controllers/achievementController.js";
import upload from "../middleware/multerMIddleware.js";
import { validateAchievementInput } from "../middleware/validationMiddleware.js";

let router = Router();

router.get("/", getAchievements);
router.post("/", upload.single("image"), validateAchievementInput, createAchievement);
router.get("/:id", getAchievements);
router.patch("/:id", upload.single("image"), updateAchievement);
router.delete("/:id", deleteAchievement);

export default router;