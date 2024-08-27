import { UtilityLinkModel } from "../models/utilityLink.js";
import getAllLink from "./getAllLink.js";

async function deleteLink(req, res) {
  const { _id } = req.body;
  await UtilityLinkModel.deleteOne({ _id });
  getAllLink(req, res);
}
export default deleteLink;
