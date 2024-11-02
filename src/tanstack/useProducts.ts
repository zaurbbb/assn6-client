import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";
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

export const useGetMeta = (api) =>
  useQuery({
    queryKey: [ "useGetMeta" ],
    queryFn: () => getProductsMetaFn(api),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

export const useGetProducts = (api, query) =>
  useQuery({
    queryKey: [ "useGetProducts", query ],
    queryFn: () => getProductsFn(api, query),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

export const usePostAddFavoriteProduct = (api) =>
  useMutation({
    mutationFn: (productId) => postAddFavoriteProductFn(api, productId),
    onSuccess: onQuerySuccess([ "useGetFavorites" ]),
  });

export const usePostRemoveFavoriteProduct = (api) =>
  useMutation({
    mutationFn: (productId) => postRemoveFavoriteProductFn(api, productId),
    onSuccess: onQuerySuccess([ "useGetFavorites" ]),
  });

export const useGetProductByProductId = (api, productId) =>
  useQuery({
    queryKey: [ "useGetProductByProductId", productId ],
    queryFn: () => getProductByProductIdFn(api, productId),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

export const useGetRecommendedProducts = (api) =>
  useQuery({
    queryKey: [ "useGetRecommendedProducts" ],
    queryFn: () => getRecommendedProductsFn(api),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
export const usePostProduct = (api) =>
  useMutation({
    mutationFn: (data) => postProductFn(api, data),
    onSuccess: onQuerySuccess([ "useGetProducts" ]),
  });

export const usePatchProductById = (api) =>
  useMutation({
    mutationFn: (data) => patchProductByIdFn(api, data),
    onSuccess: onQuerySuccess([ "useGetProducts" ]),
  });

export const useDeleteProductById = (api) =>
  useMutation({
    mutationFn: (id) => deleteProductByIdFn(api, id),
    onSuccess: onQuerySuccess([ "useGetProducts" ]),
  });