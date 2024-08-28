import { responseMessage } from "./constant.js";

export const errorHandler = (status, err) => {
  console.log("ERROR ", err);
  const error = new Error();
  error.status = status;
  error.message =
    err?.errorResponse?.errmsg || responseMessage.somethingWentWrong;
  return error;
};
