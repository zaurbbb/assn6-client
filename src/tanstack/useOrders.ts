import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import {
  getOrderByIdFn,
  getOrdersFn,
  postOrderFn,
} from "../api/fn/orders";
import { onQuerySuccess } from "./index";

export const useGetOrders = (api) =>
  useQuery({
    queryKey: [ "useGetOrder" ],
    queryFn: () => getOrdersFn(api),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

export const useGetOrderByOrderId = (api, id) =>
  useQuery({
    queryKey: [ "useGetOrderByOrderId" ],
    queryFn: () => getOrderByIdFn(api, id),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

export const usePostOrder = (api) =>
  useMutation({
    mutationFn: (data) => {

      return postOrderFn(api, data)
    },
    onSuccess: onQuerySuccess([ "useGetOrder" ]),
  });