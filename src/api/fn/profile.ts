import {
  API,
  errorAnswer,
  multiPartFormDataConfig,
  responseAnswer,
} from "../index";

export const getProfile = async (api) =>
  await API.get("/v1/profile")
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));

export const patchProfile = async (api, data) =>
  await API.patch("/v1/profile", data, multiPartFormDataConfig)
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));

export const deleteProfile = async (api) =>
  await API.delete("/v1/profile")
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));