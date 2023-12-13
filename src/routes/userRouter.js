import express from "express";
import { getUsers } from "../controllers/userController.js";



const router = express.Router();

router.get("/api/user",getUsers)



export default router;
