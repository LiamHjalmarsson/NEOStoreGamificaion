import { Router } from "express";
import { deleteUser, getStats, getUser, getUsers, updateUser } from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermission } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", getUsers);
router.get("/current-user", getUser);
router.patch("/update-user", updateUser);
router.delete("/delete-user", deleteUser);
router.get("/stats", getStats);

export default router;