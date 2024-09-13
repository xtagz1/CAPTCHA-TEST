import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Command {
  text: string;
  shape: string
}


interface CommandStore {
  command: Command;
  update: (command: Command) => void;
}

export const useCommandStore = create<CommandStore>()(
  persist(
    (set) => ({
      command: { text: 'Take Selfie', shape: '' }, 
      update: (command: Command) => set({ command }),
    }),
    {
      name: "command-storage", 
      getStorage: () => localStorage, 
    }
  )
);
