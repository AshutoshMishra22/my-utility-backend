import { UtilityLinkModel } from "../models/utilityLink.js";

async function getAllLink(_, res) {
  const updatedData = await UtilityLinkModel.find({});
  res.send(updatedData);
}
export default getAllLink;
