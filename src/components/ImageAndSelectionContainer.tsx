import { useEffect, useState } from "react";


export default function ImageAndSelectionContainer() {

    const [position, setPosition] = useState({ top: 0, left: 0 });

    // Function to generate a random position
    const getRandomPosition = () => {
      const maxHeight = 15 * 10; 
      const maxWidth = 28 * 10; 
  
      const top = Math.random() * maxHeight; // Random top position
      const left = Math.random() * maxWidth; // Random left position
  
      return { top, left };
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setPosition(getRandomPosition());
      }, 1000); // Update position every second
  
      return () => clearInterval(intervalId); 
    }, []);

  return (
    <div className="border relative">
        <img className="max-h-[22rem]"
        src="https://res.cloudinary.com/jonixxx/image/upload/v1726092714/selfie-image_cijkdo.jpg"
        />
        <div
        className="border-2 border-gray-400 absolute h-[9rem] w-[9rem]"
        style={{ top: `${position.top}px`, left: `${position.left}px` }} // Use inline styles to position randomly
        >
        </div>
    </div>
  )
}
