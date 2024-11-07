import {
  API,
  errorAnswer,
  multiPartFormDataConfig,
  responseAnswer,
} from "../index";

export const getLikedProductsFn = async (api) =>
  await API.get("/catalog/products/liked/")
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));

export const postLikeProductFn = async (api, productId) => {
  const formData = new FormData();
  formData.append("product", productId);
  formData.append("interaction_type", "like");

  return await API.post(`catalog/products/interactions/`, formData, multiPartFormDataConfig)
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));
}

export const postViewProductFn = async (api, productId) => {
  const formData = new FormData();
  formData.append("product", productId);
  formData.append("interaction_type", "view");

  return await API.post(`catalog/products/interactions/`, formData, multiPartFormDataConfig)
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));
}