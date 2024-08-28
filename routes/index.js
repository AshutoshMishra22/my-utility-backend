import express from "express";
import { ROUTE_PATH } from "../utils/constant.js";
import utilityLinkRoute from "./utilityLink.route.js";
import authRoute from "./auth.route.js";

const router = express.Router();

router.use(ROUTE_PATH.auth, authRoute);
router.use(ROUTE_PATH.utilityLink, utilityLinkRoute);

export default router;
