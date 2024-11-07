import {
  API,
  errorAnswer,
  multiPartFormDataConfig,
  responseAnswer,
} from "../index";

export const getOrdersFn = async (api) =>
  await API.get("/cart/orders/")
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));

export const getOrderByIdFn = async (api, id) =>
  await API.get(`/cart/orders/${id}`)
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));

export const postOrderFn = async (api, data) =>
  await API.post("/cart/order/", data)
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));