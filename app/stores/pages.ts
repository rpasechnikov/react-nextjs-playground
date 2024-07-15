import { create } from "zustand";
import { Page } from "../types";

interface PageState {
  pages: Page[];
  addPage: (newPage: Page) => void;
}

const usePageStore = create<PageState>()((set) => ({
  pages: [],
  addPage: (newPage) => set((state) => ({ pages: [...state.pages, newPage] })),
}));

export default usePageStore;
