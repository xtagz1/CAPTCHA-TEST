import { useEffect } from "react";
import { useBoxStore } from "@/stores/boxStore";
import { useButtonStore } from "@/stores/buttonValueStore";
import { HomeLocationChecker } from "./HomeLocationChecker";

// Custom hook for random position of the box
const UseGenerateRandomPosition = () => {
  const { box, update } = useBoxStore();
  const { updateButton, buttonValue } = useButtonStore();
  const { locationIsHome } = HomeLocationChecker()

  const getRandomPosition = () => {
    const maxHeight = 15 * 10;
    const maxWidth = 28 * 10;

    const top = Math.random() * maxHeight;
    const left = Math.random() * maxWidth;

    return { top, left };
  };

  useEffect(() => {
    if (locationIsHome) {
      updateButton({ toContinue: false, text: "CONTINUE" });
    }

    let intervalId: NodeJS.Timeout | null = null;

    if (!buttonValue?.toContinue) {
      intervalId = setInterval(() => {
        update(getRandomPosition());
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [buttonValue?.toContinue]);

  return { box, buttonValue };
};

export default UseGenerateRandomPosition;
