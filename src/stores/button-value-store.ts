import { create } from "zustand";

interface ButtonValue{
    toContinue:boolean;
    text:string;
}


interface ButtonStore{
    buttonValue: ButtonValue;
    updateButton: (buttonValue: ButtonValue) => void
}

export const useButtonStore = create<ButtonStore>((set) => ({
    buttonValue: { toContinue:false, text: 'CONTINUE' },
    updateButton: (buttonValue: ButtonValue) => set({ buttonValue })
}))