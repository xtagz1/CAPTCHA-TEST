import useGenerateRandomPosition from "@/hooks/useGenerateRandomPosition";
import { memo } from "react";
interface BoxProps {
  
}

const CaptchaBox = memo(({}: BoxProps) => {
const { box, buttonValue } = useGenerateRandomPosition();

  
  return (
        <div
          className="absolute h-[9rem] w-[9rem] grid grid-cols-5 grid-rows-5 gap-0"
          style={{ top: `${box.top}px`, left: `${box.left}px` }}
        >
          { buttonValue?.toContinue && Array.from({ length: 25 }).map((_, index) => (
            <div
              key={index}
              className="border border-white bg-white bg-opacity-40 w-full h-full flex items-senter justify-center hover:border-sky-700"
            >
                    {/* Triangle shape */}
                    <div className="border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-blue-500"></div>
            </div>
          ))}
        </div>
  );
});

export default CaptchaBox;
