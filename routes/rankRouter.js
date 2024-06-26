import { Router } from "express";
import { createRank, deleteRank, getRank, getRanks, updateRank } from "../controllers/rankController.js";

let router = Router();

router.get("/", getRanks);
router.post("/", createRank);
router.get("/:id", getRank);
router.patch("/:id", updateRank);
router.delete("/:id", deleteRank);

export default router;