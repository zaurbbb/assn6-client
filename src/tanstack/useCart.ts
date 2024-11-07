import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import {
  deleteCartFn,
  getCartFn,
  postCartFn,
} from "../api/fn/cart";
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

export const useGetCart = (api) =>
  useQuery({
    queryKey: [ "useGetCart" ],
    queryFn: () => getCartFn(api),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

export const usePostCart = (api) =>
  useMutation({
    mutationFn: (data) => {
      return postCartFn(api, data)
    },
    onSuccess: onQuerySuccess([ "useGetCart" ]),
  });

export const useDeleteCart = (api) =>
  useMutation({
    mutationFn: (id) => deleteCartFn(api, id),
    onSuccess: onQuerySuccess([ "useGetCart" ]),
  });