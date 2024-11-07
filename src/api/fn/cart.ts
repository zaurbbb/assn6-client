import {
  API,
  errorAnswer,
  multiPartFormDataConfig,
  responseAnswer,
} from "../index";

export const getCartFn = async (api) =>
  await API.get("/cart/")
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));

export const postCartFn = async (api, data) =>
  await API.post("/cart/", data)
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));

export const deleteCartFn = async (api, id) =>
  await API.delete(`/cart/${id}`)
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));