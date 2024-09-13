import { useButtonStore } from "@/stores/buttonValueStore";
import { useCommandStore } from "@/stores/commandTextStore";
import { useEffect } from "react";

export const GenerateRandomCommands = () => {
  const { buttonValue } = useButtonStore();
  const { update, command } = useCommandStore()

  const shapes = [
    "Select Triangle",
    "Select Circle",
    "Select Square",
  ];


  const generateCommands = () => {
    const randomIndex = Math.floor(Math.random() * shapes.length);
    return shapes[randomIndex];
  };

  useEffect(() => {
    if (buttonValue?.toContinue === true) {
      const newCommand = generateCommands();
      update({text: newCommand});
    }else(
      update({text: 'Take Selfie'})
    )
  }, [buttonValue]); 

  return { command }
}