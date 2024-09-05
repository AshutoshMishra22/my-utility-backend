import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { BASE_API, responseMessage } from "./utils/constant.js";
import versionV1 from "./version/v1.js";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT ?? 5000;
mongoose
  .connect(process.env.MONGODB_URL, { dbName: "globalDB" })
  .then(() => app.listen(PORT, () => console.log(`SERVER RUNNING at ${PORT}`)))
  .catch((error) => {
    console.warn("Error in establishing connection to server", error);
  });

app.get("/", (_, res) => {
  res.send("https://myutilitypwa.netlify.app/");
});

app.use(BASE_API, versionV1);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || responseMessage.internalServerError;
  return res.status(statusCode).json({
    success: false,
    message,
    status: statusCode,
  });
});
