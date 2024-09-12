
import { create } from "zustand";

interface Box {
  top: number;
  left: number;
}

// Define the BoxStore interface
interface BoxStore {
  box: Box ;
  update: (box: Box) => void;
}


export const useBoxStore = create<BoxStore>((set) => ({
    box: { top: 0, left: 0 }, 
    update: (box: Box) => set({ box }) 
}));
