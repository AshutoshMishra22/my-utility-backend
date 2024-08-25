import { UtilityLinkModel } from "../models/utilityLink.js";

async function getLink(_, res) {
  const updatedData = await UtilityLinkModel.find({});
  res.send(updatedData);
}
export default getLink;
