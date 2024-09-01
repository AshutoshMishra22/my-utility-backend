const BASE_API = "/api";
const API_VERSION_V1 = "/v1";
const API_VERSION_V2 = "/v2";

const ROUTE_PATH = {
  auth: "/auth",
  utilityLink: "/utility-link",
};
const responseMessage = {
  userCreated: "User created successfully.",
  // Error list
  errorUserNotFound: "User not found.",
  errorInvalidCred: "Invalid credentials/combination of credentials.",
  somethingWentWrong: "Something went wrong.",
  internalServerError: "Internal Server Error.",
};
const JWT_EXPIRY = "100000000";
export {
  JWT_EXPIRY,
  BASE_API,
  ROUTE_PATH,
  API_VERSION_V1,
  API_VERSION_V2,
  responseMessage,
};
