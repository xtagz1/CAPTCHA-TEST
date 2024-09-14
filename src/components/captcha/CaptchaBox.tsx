import UseGenerateRandomPosition from "@/hooks/UseGenerateRandomPosition";
import { memo, useEffect } from "react";
import Triangle from "../shapes/Triangle";
import Square from "../shapes/Square";
import Circle from "../shapes/Circle";
import { GenerateRandomShapesIndices } from "@/hooks/GenerateRandomShapesIndices";
import { useSelectedShapeIndicesStore, useShapeIndicesStore } from "@/stores/shapeIndices";

interface BoxProps {}

const CaptchaBox = memo(({}: BoxProps) => {
  const { box, buttonValue } = UseGenerateRandomPosition(); 
  const { selectedShapeIndices, updateSelectedShapeIndices } = useSelectedShapeIndicesStore()
  const { shapes } = useShapeIndicesStore()
  const { generateAndUpdateIndices } = GenerateRandomShapesIndices()

  const select = (index: number) => {
    if (selectedShapeIndices.includes(index)) {
      // Remove the index if it is already selected
      updateSelectedShapeIndices(selectedShapeIndices.filter(i => i !== index));
    } else {
      // Add the index if it is not selected
      updateSelectedShapeIndices([index, ...selectedShapeIndices]);
    }
  };

  useEffect(() => {
    generateAndUpdateIndices()
}, []);

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
            className={`border border-white bg-white bg-opacity-40 w-full h-full flex items-center justify-center hover:bg-sky-700`}
            style={{backgroundColor: selectedShapeIndices.includes(index) ? 'orange' : 'transparent',}}
          >
            {shapes?.triangle?.includes(index) && <Triangle />}
            {shapes?.square?.includes(index) && <Square />}
            {shapes?.circle?.includes(index) && <Circle />}
          </div>
        ))}
    </div>
  );
});

export default CaptchaBox;