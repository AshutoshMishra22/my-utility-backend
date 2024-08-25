import { UtilityLinkModel } from "../models/utilityLink.js";
import getLink from "./getLink.js";

async function addLink(req, res) {
  const entryData = new UtilityLinkModel(req.body);
  await entryData.save();
  getLink(req, res);
}
export default addLink;
