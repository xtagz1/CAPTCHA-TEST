import UseGenerateRandomPosition from "@/hooks/UseGenerateRandomPosition";
import { memo } from "react";
import Triangle from "../shapes/Triangle";
import Square from "../shapes/Square";
import Circle from "../shapes/Circle";
import { GenerateRandomShapesIndices } from "@/hooks/GenerateRandomShapesIndices";
import { useSelectedShapeIndicesStore } from "@/stores/shapeIndices";

interface BoxProps {}

const CaptchaBox = memo(({}: BoxProps) => {
  const { box, buttonValue } = UseGenerateRandomPosition(); 
  const  {triangleIndices, squareIndices, circleIndices} = GenerateRandomShapesIndices()
  const { selectedShapeIndices, updateSelectedShapeIndices } = useSelectedShapeIndicesStore()

  const select = (index: number) => {
    if (selectedShapeIndices.includes(index)) {
      // Remove the index if it is already selected
      updateSelectedShapeIndices(selectedShapeIndices.filter(i => i !== index));
    } else {
      // Add the index if it is not selected
      updateSelectedShapeIndices([index, ...selectedShapeIndices]);
    }
  };


  return (
    <div
      className="border-2 border-white absolute h-[9rem] w-[9rem] grid grid-cols-5 grid-rows-5 gap-0"
      style={{ top: `${box.top}px`, left: `${box.left}px` }}
    >
      {buttonValue?.toContinue &&
        Array.from({ length: 25 }).map((_, index) => (
          <div
            onClick={() => select(index)}
            key={index}
            className={`border border-white bg-white bg-opacity-40 w-full h-full flex items-center justify-center hover:bg-sky-700 ${
              selectedShapeIndices.includes(index) ? 'bg-black' : ''
            }`}
          >
            {triangleIndices.includes(index) && <Triangle />}
            {squareIndices.includes(index) && <Square />}
            {circleIndices.includes(index) && <Circle />}
          </div>
        ))}
    </div>
  );
});

export default CaptchaBox;