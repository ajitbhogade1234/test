import path from "path";
import { fileURLToPath } from "url";
import * as express from "express";
import { createServer } from "./index";

const app = createServer();

app.set("trust proxy", 1);

const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to built frontend
const distPath = path.join(__dirname, "../spa");

// Serve static frontend files
app.use(express.static(distPath));

// React Router support
// app.get("/*", (req, res) => {
//   if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
//     return res.status(404).json({
//       error: "API endpoint not found",
//     });
//   }

//   res.sendFile(path.join(distPath, "index.html"));
// });
app.use((req, res) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({
      error: "API endpoint not found",
    });
  }

  res.sendFile(path.join(distPath, "index.html"));
});
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT");
  process.exit(0);
});