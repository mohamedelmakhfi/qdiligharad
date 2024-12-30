import { create } from "zustand";

export const useAppStore = create((set) => ({
    isScreenDevided: false,
    devideScreen: () => set((state) => ({ isScreenDevided: !state.isScreenDevided })),
  }));