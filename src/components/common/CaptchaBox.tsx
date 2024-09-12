import { useBoxStore } from "@/stores/box-store";
import { memo, useEffect, useState } from "react";

interface BoxProps {
  toContinue:boolean
}

const CaptchaBox = memo(({toContinue}: BoxProps) => {

const { box, update } = useBoxStore()

// Generate a random position
const getRandomPosition = () => {
    const maxHeight = 15 * 10; 
    const maxWidth = 35 * 10; 

    const top = Math.random() * maxHeight; 
    const left = Math.random() * maxWidth; 

    return { top, left };
};

// Update position every second
useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (!toContinue) {
      // Start the interval if toContinue is false
      intervalId = setInterval(() => {
        update(getRandomPosition());
      }, 1000);
    }

    // Clear interval when toContinue is true or component unmounts
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [toContinue]); 
  
  return (
    <div
      className="border-2 border-gray-400 absolute h-[9rem] w-[9rem]"
      style={{ top: `${box.top}px`, left: `${box.left}px` }}
    ></div>
  );
});

export default CaptchaBox;
