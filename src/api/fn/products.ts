import {
  API,
  errorAnswer,
  multiPartFormDataConfig,
  responseAnswer,
} from "../index";

export const getProductsMetaFn = async (api) =>
  await API.get("/products/meta")
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));

export const getProductsFn = async (api, query) =>
  await API.get("/catalog/products/", { params: query })
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));

export const postAddFavoriteProductFn = async (api, productId) =>
  await API.post(`/products/add-favorite`, {
    product_id: productId,
  })
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));

export const postRemoveFavoriteProductFn = async (api, productId) =>
  await API.post(`/products/remove-favorite`, {
    product_id: productId,
  })
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));

export const getProductByProductIdFn = async (api, productId) =>
  await API.get(`/catalog/products/${productId}/`)
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));

export const getRecommendedProductsFn = async (api) =>
  await API.get("/catalog/recommendations/")
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));
// export const getProductsBySubCategoryIdFn = async (api, queries, id) =>
//   await API.get(`/subcategories/${id}/products`, { params: queries })
//     .then((response) => responseAnswer(response, api))
//     .catch((error) => errorAnswer(error));
//
// export const getProductsByBrandIdFn = async (api, queries, id) =>
//   await API.get(`/brands/${id}/products`, { params: queries })
//     .then((response) => responseAnswer(response, api))
//     .catch((error) => errorAnswer(error));

export const postProductFn = async (api, data) =>
  await API.post("/admin/products", data, multiPartFormDataConfig)
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));

export const patchProductByIdFn = async (api, data) =>
  await API.patch(`/admin/products/${data.id}`, data.values, multiPartFormDataConfig)
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));

export const deleteProductByIdFn = async (api, id) =>
  await API.delete(`/admin/products/${id}`)
    .then((response) => responseAnswer(response, api))
    .catch((error) => errorAnswer(error));