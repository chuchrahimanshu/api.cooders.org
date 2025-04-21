// Import Section
import app from "./app";
import {
  DEVELOPMENT_URI,
  NODE_ENVIRONMENT,
  PORT,
  PRODUCTION_URI,
} from "./constants/env.constants";

// Configuration Section
const SERVER_URI: string =
  NODE_ENVIRONMENT === "DEVELOPMENT" ? DEVELOPMENT_URI : PRODUCTION_URI;

// Igniting Server
async function main() {
  try {
    app.listen(PORT, (error) => {
      if (error) {
        console.log(`ERROR: Listening Server at ${SERVER_URI}`, error);
        process.exit(1);
      }
      console.log(`SUCCESS: Listening Server at ${SERVER_URI}`);
    });
  } catch (error) {
    console.log(`ERROR: Igniting Server at ${SERVER_URI}`, error);
    process.exit(1);
  }
}
main();
