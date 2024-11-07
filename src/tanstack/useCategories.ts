import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import {
  deleteCartFn,
  getCartFn,
  postCartFn,
} from "../api/fn/cart";
import { getCategoriesFn } from "../api/fn/categories";
import {
  deleteProductByIdFn,
  getProductByProductIdFn,
  getProductsFn,
  getProductsMetaFn,
  getRecommendedProductsFn,
  patchProductByIdFn,
  postAddFavoriteProductFn,
  postProductFn,
  postRemoveFavoriteProductFn,
} from "../api/fn/products";
import { onQuerySuccess } from "./index";

export const useGetCategories = (api) =>
  useQuery({
    queryKey: [ "useGetCategories" ],
    queryFn: () => getCategoriesFn(api),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });