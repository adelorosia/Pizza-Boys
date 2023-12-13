import express from "express";
import { createUser, getUsers } from "../controllers/userController.js";



const router = express.Router();

router.get("/api/user",getUsers)
router.post("/api/user/create",createUser)



export default router;
