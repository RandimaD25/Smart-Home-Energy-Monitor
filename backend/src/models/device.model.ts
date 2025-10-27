import mongoose, { Schema, Document } from "mongoose";

export interface IDevice extends Document {
  name: string;
  type: string;
  status: "on" | "off";
  powerUsage: number;
  createdAt: Date;
}

const deviceSchema = new Schema<IDevice>(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: String, enum: ["on", "off"], default: "off" },
    powerUsage: { type: Number, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default mongoose.model<IDevice>("Device", deviceSchema);
