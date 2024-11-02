import { useMutation } from "@tanstack/react-query";
import { postOrderFn } from "../api/fn/orders";
import { onQuerySuccess } from "./index";

export const usePostOrder = (api) =>
  useMutation({
    mutationFn: (data) => postOrderFn(api, data),
    onSuccess: onQuerySuccess([ "useGetOrders" ]),
  });