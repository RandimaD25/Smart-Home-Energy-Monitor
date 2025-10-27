import express, { Request, Response } from "express";
import deviceRoutes from "./routes/device.routes";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/devices", deviceRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running just fine");
});

export default app;
