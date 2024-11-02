import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/fn/profile";

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