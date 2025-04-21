// Import Section
import app from "./app";
import { connectMongoDB } from "./config/index.config";
import {
  DEVELOPMENT_URI,
  NODE_ENVIRONMENT,
  PORT,
  PRODUCTION_URI,
} from "./constants/index.constants";
import router from "./routes/index.routes";

// Configuration Section
const SERVER_URI: string =
  NODE_ENVIRONMENT === "DEVELOPMENT" ? DEVELOPMENT_URI : PRODUCTION_URI;

// Igniting Server
function main(): void {
  try {
    connectMongoDB()
      .then(() => {
        app.use("/", router);
        app.listen(PORT, (error) => {
          if (error) {
            console.log(`ERROR: Listening Server at ${SERVER_URI}`, error);
            process.exit(1);
          }
          console.log(`SUCCESS: Listening Server at ${SERVER_URI}`);
        });
      })
      .catch((error) => {
        console.log("ERROR: Connecting database - MongoDB", error);
        process.exit(1);
      });
  } catch (error) {
    console.log(`ERROR: Igniting Server at ${SERVER_URI}`, error);
    process.exit(1);
  }
}
main();
