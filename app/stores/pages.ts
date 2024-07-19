import { create } from "zustand";
import { NewPage, Page } from "../types";
import { v4 as uuidv4 } from "uuid";

interface PageState {
  pages: Page[];
  addPage: (newPage: NewPage) => void;
}

/**
 * DEPRECATED IN FAVOUR OF USING PRISMA DIRECTLY FROM SERVER COMPONENTS
 * KEPT AS AN EXAMPLE ONLY
 */
const usePageStore = create<PageState>()((set) => ({
  pages: [],
  addPage: (newPage) =>
    set((state) => ({ pages: [...state.pages, { id: uuidv4(), ...newPage }] })),
}));

export default usePageStore;
