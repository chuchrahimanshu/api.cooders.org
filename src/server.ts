// Import Section
import app from "./app";
import { connectToDatabaseMongoDB } from "./config";
import { PORT } from "./constants/env.constants";

// Configuration Section
const SERVER_PORT: number = parseInt(PORT) || 8000;

// Igniting the Server
app.listen(SERVER_PORT, async (err) => {
  if (err) {
    console.log(`Error - Connecting server at http://localhost:${SERVER_PORT}`);
    return;
  }

  try {
    await connectToDatabaseMongoDB();
    console.log(
      `Success - Server connected at http://localhost:${SERVER_PORT}`
    );
  } catch (error) {
    console.log(`Error - Listening at PORT: ${SERVER_PORT}`);
  }
});
