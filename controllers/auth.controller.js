import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { userModel } from "../models/userModel.js";
import { responseTemplate } from "../responseTemplate/index.js";
import { errorHandler } from "../utils/error.js";
import { JWT_EXPIRY, responseMessage } from "../utils/constant.js";

async function signup(req, res, next) {
  const { username, password, email, linkId, myList } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new userModel({
    username,
    password: hashPassword,
    email,
    linkId,
    myList,
  });
  try {
    await newUser.save();
    res.status(201).json(responseTemplate(responseMessage.userCreated));
  } catch (error) {
    next(errorHandler(300, error));
  }
}
async function signin(req, res, next) {
  const { password, email } = req.body;
  try {
    const validUser = await userModel.findOne({ email });
    if (!validUser)
      return next(errorHandler(404, responseMessage.errorUserNotFound));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword)
      return next(errorHandler(401, responseMessage.errorInvalidCred));
    const jwtToken = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { _id, password: dbPassword, ...userDetails } = validUser._doc;
    const expiryDate = new Date(Date.now() + JWT_EXPIRY);
    res
      .cookie("access_token", jwtToken, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(userDetails);
  } catch (error) {
    next(errorHandler(300, error));
  }
}
export { signup, signin };
