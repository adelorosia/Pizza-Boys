import mongoose from "mongoose";

const dbConnect =  () => {
  try {
    mongoose.set("strictQuery", false);
    const mongodbUrl = process.env.MONGODB_URL;
    if (!mongodbUrl) {
      throw new Error("Environment variable MONGODB_URL is not defined.");
    }

     mongoose.connect(mongodbUrl, {});
    console.log("Database connection established.");
  } catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
  }
};

export default dbConnect;
