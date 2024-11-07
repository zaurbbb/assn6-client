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
  getLikedProductsFn,
  postLikeProductFn,
  postViewProductFn,
} from "../api/fn/liked";
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

export const useGetLikedProducts = (api) =>
  useQuery({
    queryKey: [ "useGetLikedProducts" ],
    queryFn: () => getLikedProductsFn(api),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
export const useLikeProduct = (api) =>
  useMutation({
    mutationFn: (productId) => postLikeProductFn(api, productId),
    onSuccess: onQuerySuccess([ "useGetProducts" ]),
  });

export const useViewProduct = (api) =>
  useMutation({
    mutationFn: (productId) => postViewProductFn(api, productId),
    onSuccess: onQuerySuccess([ "useGetProducts" ]),
  });