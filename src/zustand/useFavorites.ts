import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesState {
  favorites: any[];
}

interface FavoritesStoreActions {
  changeFavorites: (favorites: any[]) => void;
}

type FavoritesStore = FavoritesState & FavoritesStoreActions;

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set) => ({
      favorites: [],
      changeFavorites: (favorites) => set(() => {
        return { favorites };
      }),
    }),
    {
      name: "zustand-favorites",
    }
  )
);

