import express from "express";

import { createDevice } from "../controllers/device.controller";
import { getDevices } from "../controllers/device.controller";
import { updateDevice } from "../controllers/device.controller";

const router = express.Router();

router.post("/", createDevice);
router.get("/", getDevices);
router.put("/:id", updateDevice);

export default router;
