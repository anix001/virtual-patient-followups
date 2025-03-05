import mongoose, { Schema, Document, Model } from "mongoose";

// export type followupStatus = "Pending" | "Healthy" | "Concern";

export interface IFollowUp {
  date: Date;
  status: string
}

interface IPatient extends Document {
  name: string;
  ownerContact: string;
  followUps: IFollowUp[];
  notifications: string[];
}

const FollowUpSchema = new Schema<IFollowUp>({
  date: { type: Date, required: true },
  status: { type: String, required: true },
});

const PatientSchema = new Schema<IPatient>({
  name: { type: String, required: true },
  ownerContact: { type: String, required: true },
  followUps: { type: [FollowUpSchema], default: [] },
  notifications: { type: [String], default: [] },
});

const PatientModel: Model<IPatient> = mongoose.model<IPatient>("Patient", PatientSchema);

export default PatientModel;
