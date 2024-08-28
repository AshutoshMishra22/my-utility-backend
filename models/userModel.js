import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    linkId: Array,
    myList: Array,
  },
  { timestamps: true }
);

export const userModel = new model("UserModel", userSchema);
