import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ButtonValue } from "@/interface/captcha";

interface ButtonStore {
  buttonValue: ButtonValue;
  updateButton: (buttonValue: ButtonValue) => void;
}

export const useButtonStore = create<ButtonStore>()(
  persist(
    (set) => ({
      buttonValue: { toContinue: false, text: 'CONTINUE' }, 
      updateButton: (buttonValue: ButtonValue) => set({ buttonValue }),
    }),
    {
      name: "button-storage", 
      getStorage: () => localStorage, 
    }
  )
);
