import { Router } from "express";
import { createAchievement, deleteAchievement, getAchievements, updateAchievement } from "../controllers/achievementController.js";

let router = Router();

router.get("/", getAchievements);
router.post("/", createAchievement);
router.get("/:id", getAchievements);
router.patch("/:id", updateAchievement);
router.delete("/:id", deleteAchievement);

export default router;