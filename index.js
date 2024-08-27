import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import addLink from "./routeCB/addLink.js";
import getAllLink from "./routeCB/getAllLink.js";
import deleteLink from "./routeCB/deleteLink.js";
import getLink from "./routeCB/getLink.js";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://mashutoshofficial:dbPassword2024@globalbasedatabase.gtkuslp.mongodb.net/?retryWrites=true&w=majority&appName=globalBaseDataBase";
const PORT = process.env.PORT ?? 5000;

mongoose
  .connect(CONNECTION_URL, { dbName: "UtilityUrl" })
  .then(() => app.listen(PORT, () => console.log(`SERVER RUNNING at ${PORT}`)))
  .catch((error) => {
    console.warn("Error in establishing connection to server", error);
  });

app.get("/", (_, res) => {
  res.send("https://myutilitypwa.netlify.app/");
});

app.get("/getAllLink", getAllLink);
app.post("/getLink", getLink);
app.post("/addLink", addLink);
app.delete("/deleteLink", deleteLink);
