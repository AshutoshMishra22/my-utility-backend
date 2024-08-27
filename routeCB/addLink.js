import { UtilityLinkModel } from "../models/utilityLink.js";
import getAllLink from "./getAllLink.js";

async function addLink(req, res) {
  const entryData = new UtilityLinkModel(req.body);
  await entryData.save();
  getAllLink(req, res);
}
export default addLink;
