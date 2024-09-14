import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AttemptStore {
    attempts: number;
    updateNumberofAttempts: (attempts: number) => void;
}

export const useAttemptStore = create<AttemptStore>()(
  persist(
    (set) => ({
      attempts: 2,
      updateNumberofAttempts: (attempts: number) => set({ attempts }),
    }),
    {
      name: "attempt-store", 
      getStorage: () => localStorage,  
    }
  )
);
