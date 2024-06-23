import { Router } from "express";
import { deleteUser, loginUser, logoutUser, registerUser } from "../controllers/authController.js";

let router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.delete("/delete", deleteUser);

export default router;