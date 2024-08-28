import bcryptjs from "bcryptjs";
import { userModel } from "../models/userModel.js";
import { responseTemplate } from "../responseTemplate/index.js";

async function signup(req, res) {
  const { username, password, email, userId, linkId, myList } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new userModel({
    username,
    password: hashPassword,
    email,
    userId,
    linkId,
    myList,
  });
  try {
    await newUser.save();
    res.status(201).json(responseTemplate("User created successfully"));
  } catch (error) {
    res.status(500).json(responseTemplate(error.errorResponse.errmsg));
  }
}
export default signup;
