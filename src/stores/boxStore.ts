import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Box {
  top: number;
  left: number;
}


interface BoxStore {
  box: Box;
  update: (box: Box) => void;
}

export const useBoxStore = create<BoxStore>()(
  persist(
    (set) => ({
      box: { top: 0, left: 0 }, 
      update: (box: Box) => {
        set({ box });
      },
    }),
    {
      name: "box-storage", 
      getStorage: () => localStorage, 
      onRehydrateStorage: () => (state) => {
        console.log("Rehydrating store:", state);
      }
    }
  )
);
