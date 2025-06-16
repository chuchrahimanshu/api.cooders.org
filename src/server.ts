// Import Section
import app from "./app";

// Configuration Section
const PORT = process.env.PORT || 8000;

// Igniting the Server
app.listen(PORT, () => {
  try {
    console.log(`Success - Server connected at http://localhost:${PORT}`);
  } catch (error) {
    console.log(`Error - Connecting server at http://localhost:${PORT}`);
    return;
  }
});
