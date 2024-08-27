import { UtilityLinkModel } from "../models/utilityLink.js";

async function getLink(req, res) {
  const query = {
    $or: [
      { author: { $regex: new RegExp(req.body.filter, "i") } },
      { url: { $regex: new RegExp(req.body.filter, "i") } },
      { tags: { $elemMatch: { $regex: new RegExp(req.body.filter, "i") } } }, // For searching within arrays
    ],
  };
  const updatedData = await UtilityLinkModel.find(query);
  res.send(updatedData);
}
export default getLink;
