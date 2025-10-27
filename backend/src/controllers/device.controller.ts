import { Request, Response } from "express";
import Device from "../models/device.model";

// Create a new device
export const createDevice = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const device = await Device.create(req.body);
    res.status(201).json(device);
  } catch (error) {
    console.error("Error creating device:", error);
    res.status(500).json({ message: "Failed to create device" });
  }
};
