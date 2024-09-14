import { create } from "zustand";

interface AttemptStore {
    attempts: number;
    updateNumberofAttempts: (attempts: number) => void;
  }
  
  export const useAttemptStore = create<AttemptStore>((set) => ({
    attempts: 2, 
    updateNumberofAttempts: (attempts: number) => set({ attempts }), 
  }));