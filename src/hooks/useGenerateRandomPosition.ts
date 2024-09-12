import { useEffect } from "react";
import { useBoxStore } from "@/stores/boxStore";
import { useButtonStore } from "@/stores/buttonValueStore";
import { useLocation } from "react-router-dom";

// Custom hook for random position
const useGenerateRandomPosition = () => {
  const { box, update } = useBoxStore();
  const { updateButton, buttonValue } = useButtonStore();
  const location = useLocation();
  const locationIsHome = location.pathname === "/";

  const getRandomPosition = () => {
    const maxHeight = 15 * 10;
    const maxWidth = 35 * 10;

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

export default useGenerateRandomPosition;
