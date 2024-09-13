import { useButtonStore } from "@/stores/buttonValueStore";
import { useCommandStore } from "@/stores/commandTextStore";
import { useEffect, useState } from "react";

// custom hook to generate commands
export const GenerateRandomCommands = () => {
  const { buttonValue } = useButtonStore();
  const { update, command } = useCommandStore();
  const [lastCommand, setLastCommand] = useState(""); 

  const shapes = [
    {
      command: "Select Triangle",
      shape: "triangle"
    },
    {
      command: "Select Circle",
      shape: "circle"
    },
    {
      command: "Select Square", 
      shape: "square"
    },
  ];

  const generateCommands = () => {
    let randomIndex;
    let newCommand;
    let newShape

    // Ensure the new command is different from the last command
    do {
      randomIndex = Math.floor(Math.random() * shapes.length);
      newCommand = shapes[randomIndex]?.command;
      newShape = shapes[randomIndex]?.shape
    } while (newCommand === lastCommand);

    // Update the last command
    setLastCommand(newCommand);
    return { newCommand,newShape };
  };

  useEffect(() => {
    if (buttonValue?.toContinue === true) {
      const newObjCommand = generateCommands();
      update({ text: newObjCommand?.newCommand, shape: newObjCommand?.newShape });
    } else {
      update({ text: 'Take Selfie', shape: '' }); 
    }
  }, [buttonValue]);

  return { command };
};
