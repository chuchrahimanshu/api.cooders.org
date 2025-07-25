// Import Section
import mongoose, { Connection, Mongoose } from "mongoose";
import { MONGODB_URI } from "src/constants/env.constants";

// Database Connection
async function connectToDatabaseMongoDB() {
  try {
    const database: Mongoose = await mongoose.connect(MONGODB_URI);
    if (!database) {
      console.log("Error - Connecting to MongoDB");
    } else {
      const connection: Connection = database.connections[0];
      console.log(
        `Success - MongoDB connected at ${connection.host}:${connection.port}`
      );
    }
  } catch (error) {
    console.log("Error - Connecting to MongoDB", error);
  }
}

// Export Section
export default connectToDatabaseMongoDB;
