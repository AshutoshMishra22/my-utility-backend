import { UtilityLinkModel } from "../models/utilityLinkModel.js";

async function addLinkController(req, res) {
  const entryData = new UtilityLinkModel(req.body);
  await entryData.save();
  getAllLinkController(req, res);
}
async function getAllLinkController(_, res) {
  const updatedData = await UtilityLinkModel.find({});
  res.send(updatedData);
}
async function getLinkController(req, res) {
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
async function deleteLinkController(req, res) {
  const { _id } = req.body;
  await UtilityLinkModel.deleteOne({ _id });
  getAllLinkController(req, res);
}
export {
  addLinkController,
  getAllLinkController,
  getLinkController,
  deleteLinkController,
};
