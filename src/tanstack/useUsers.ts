import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import {
  deleteUserByIdFn,
  getUsersFn,
} from "../api/fn/users";
import { onQuerySuccess } from "./index";

export const useGetUsers = (api) => {
  return useQuery({
    queryKey: ["useGetUsers"],
    queryFn: () => getUsersFn(api),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};


export const useDeleteUserById = (api) => {
  return useMutation({
    mutationFn: (id) => deleteUserByIdFn(api, id),
    onSuccess: onQuerySuccess(["useGetUsers"]),
  });
};
