
import {
  API,
  errorAnswer,
  responseAnswer,
} from "../index";


export const postOrderFn = async (api, data) =>
  await API.post("/v1/orders", data)
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));
