import {
  API,
  errorAnswer,
  multiPartFormDataConfig,
  responseAnswer,
} from "../index";

export const getCategoriesFn = async (api) =>
  await API.get("/catalog/categories/")
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));
