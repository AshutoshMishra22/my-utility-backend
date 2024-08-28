import express from "express";
import {
  addLinkController,
  getAllLinkController,
  getLinkController,
  deleteLinkController,
} from "../controllers/utilityLink.controller.js";

const router = express.Router();

router.get("/getAllLink", getAllLinkController);
router.post("/getLink", getLinkController);
router.post(
  "/addLink",
  addLinkController,
  getAllLinkController,
  getLinkController,
  deleteLinkController
);
router.delete("/deleteLink", deleteLinkController);

export default router;
