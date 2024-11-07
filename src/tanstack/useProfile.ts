import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import {
  getProfile,
  patchProfile,
} from "../api/fn/profile";
import { deleteUserByIdFn } from "../api/fn/users";
import { onQuerySuccess } from "./index";

export const useGetProfile = (api) =>
  useQuery({
    queryKey: [ "useGetProfile" ],
    queryFn: () => getProfile(api),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

export const useGetFavorites = (api) =>
  useQuery({
    queryKey: [ "useGetFavorites" ],
    queryFn: async () => {
      const response = await getProfile(api);
      return response.favorites;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

export const useDeleteUserById = (api) => {
  return useMutation({
    mutationFn: (id) => deleteUserByIdFn(api, id),
    onSuccess: onQuerySuccess(["useGetUsers"]),
  });
};

export const usePatchProfile = (api) =>
  useMutation({
    mutationKey: [ "usePatchProfile" ],
    mutationFn: (data) => patchProfile(api, data),
    onSuccess: onQuerySuccess(["useGetProfile"]),
  });