import { useButtonStore } from "@/stores/buttonValueStore";
import { useCommandStore } from "@/stores/commandTextStore";
import { useEffect, useState } from "react";

export const GenerateRandomCommands = () => {
  const { buttonValue } = useButtonStore();
  const { update, command } = useCommandStore();
  const [lastCommand, setLastCommand] = useState(""); // State to track the last command

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

    // Ensure the new command is different from the last command
    do {
      randomIndex = Math.floor(Math.random() * shapes.length);
      newCommand = shapes[randomIndex]?.command;
    } while (newCommand === lastCommand);

    // Update the last command
    setLastCommand(newCommand);
    return newCommand;
  };

  useEffect(() => {
    if (buttonValue?.toContinue === true) {
      const newCommand = generateCommands();
      update({ text: newCommand });
    } else {
      update({ text: 'Take Selfie' });
    }
  }, [buttonValue]);

  return { command };
};
