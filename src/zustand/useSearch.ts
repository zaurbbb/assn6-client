import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearchState {
  search: any;
}

interface SearchStoreActions {
  changeSearch: (search: any) => void;
}

type SearchStore = SearchState & SearchStoreActions;

export const useSearchStore = create<SearchStore>()(
  persist(
    (set) => ({
      search: {
        limit: 10,
        page: 1,
        min_price: 0,
        max_price: 50000,
      },
      changeSearch: (search) => set(() => {
        return { search }
      }),
    }),
    {
      name: "zustand-search",
    }
  )
);

