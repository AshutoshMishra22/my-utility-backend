import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import addLink from "./routeCB/addLink.js";
import getLink from "./routeCB/getLink.js";

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
  res.send("Hello");
});

app.post("/addLink", addLink);
app.get("/getLink", getLink);
