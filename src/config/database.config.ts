import mongoose from "mongoose";
import { MONGODB_URI } from "../constants/index.constants";

async function connectMongoDB() {
  if (!MONGODB_URI) {
    console.log("ERROR: MongoDB connection string is not defined.");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`SUCCESS: MongoDB Connected Successfully`);
  } catch (error) {
    console.log("ERROR: Connecting database - MongoDB", error);
    process.exit(1);
  }
}

export default connectMongoDB;
