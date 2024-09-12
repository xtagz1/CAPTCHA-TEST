import { useBoxStore } from "@/stores/box-store";
import { useButtonStore } from "@/stores/button-value-store";
import { memo, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface BoxProps {
  toContinue:boolean
}

const CaptchaBox = memo(({toContinue}: BoxProps) => {

const { box, update } = useBoxStore()
const { updateButton } = useButtonStore()
const location = useLocation();
const locationIsHome = location.pathname === "/";

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
    if (locationIsHome){
      updateButton({ toContinue:false, text: 'CONTINUE' })
    }
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
