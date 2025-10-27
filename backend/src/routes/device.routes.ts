import express from "express";

import { createDevice } from "../controllers/device.controller";

const router = express.Router();

router.post("/", createDevice);

export default router;
