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

// Get all devices
export const getDevices = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const devices = await Device.find();
    res.status(200).json(devices);
  } catch (error) {
    console.error("Error fetching devices:", error);
    res.status(500).json({ message: "Failed to fetch devices" });
  }
};

// Update a device
export const updateDevice = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const device = await Device.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!device) {
      res.status(404).json({ message: "Device not found" });
      return;
    }
    res.status(200).json(device);
  } catch (error) {
    console.error("Error updating device:", error);
    res.status(500).json({ message: "Failed to update device" });
  }
};
