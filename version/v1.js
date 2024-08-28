import express from "express";
import { API_VERSION_V1 } from "../utils/constant.js";
import route from "../routes/index.js";

const router = express.Router();

router.use(API_VERSION_V1, route);

export default router;
