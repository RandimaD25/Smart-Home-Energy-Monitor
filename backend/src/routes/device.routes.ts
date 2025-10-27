import express from "express";

import { createDevice } from "../controllers/device.controller";
import { getDevices } from "../controllers/device.controller";

const router = express.Router();

router.post("/", createDevice);
router.get("/", getDevices);

export default router;
