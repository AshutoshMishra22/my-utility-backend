import mongoose from "mongoose";
const { Schema, model } = mongoose;

const utilityLinkSchema = new Schema(
  {
    author: String,
    url: String,
    id: String,
    tags: Array,
  },
  { timestamps: true }
);

export const UtilityLinkModel = new model("UtilityModel", utilityLinkSchema);
