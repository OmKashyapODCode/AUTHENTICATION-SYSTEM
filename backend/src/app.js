import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/health", healthRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});

export default app;
