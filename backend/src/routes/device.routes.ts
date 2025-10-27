import express from "express";

import {
  createDevice,
  getDevices,
  updateDevice,
  deleteDevice,
} from "../controllers/device.controller";

const router = express.Router();

router.post("/", createDevice);
router.get("/", getDevices);
router.put("/:id", updateDevice);
router.delete("/:id", deleteDevice);

export default router;
