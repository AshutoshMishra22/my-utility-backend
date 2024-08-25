import { UtilityLinkModel } from "../models/utilityLink.js";

async function deleteLink(req, res) {
  const updatedData = await UtilityLinkModel.deleteMany({});
  res.send(updatedData);
}
export default deleteLink;
