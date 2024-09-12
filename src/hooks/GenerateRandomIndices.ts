import { useButtonStore } from "@/stores/buttonValueStore";
import { useMemo } from "react";

  // Function to generate unique random indices
  export  const GenerateRandomIndices = () => {

const { buttonValue } = useButtonStore()

  const generateIndices = () => {
    const totalDivs = 25; // Total number of divs
    const indices = Array.from({ length: totalDivs }, (_, index) => index);
    
    // Shuffle the array
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    
    return indices.slice(0, 12); // Return first 12 indices (4 for each shape)
  };

  // Generate unique indices for triangles, squares, and circles
  const uniqueIndices = useMemo(() => generateIndices(), [buttonValue?.toContinue]);

  const triangleIndices = uniqueIndices.slice(0, 4);
  const squareIndices = uniqueIndices.slice(4, 8);
  const circleIndices = uniqueIndices.slice(8, 12);

  return { triangleIndices, squareIndices, circleIndices }
}