import { Router } from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/userController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", getUsers);
router.get("/current-user", authenticateUser, getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;