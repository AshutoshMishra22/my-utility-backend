import { responseMessage } from "./constant.js";

export const errorHandler = (status, err) => {
  const error = new Error();
  error.status = status;
  error.message = err || responseMessage.somethingWentWrong;
  return error;
};
