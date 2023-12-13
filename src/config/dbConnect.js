import mongoose from "mongoose";

const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL)
    console.log("Database connected")
  } catch (error) {
    console.log(error.message);
  }
};

export default dbConnect;
