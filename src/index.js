import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import cors from "cors";
import userRouter from "./routes/userRouter.js";

dotenv.config();
dbConnect()

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRouter)

const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
