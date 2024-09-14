import Commandtext from "../common/Commandtext";
import MainButton from "../common/MainButton";
import ImageAndSelectionContainer from "./ImageAndSelectionContainer";
import { useButtonStore } from "@/stores/buttonValueStore";
import { HomeLocationChecker } from "@/hooks/HomeLocationChecker";
import useShapeValidation from "@/hooks/UseShapeValidation";
import { useNavigate } from "react-router-dom";

export default function ActionContainer() {
    
  const { locationIsHome } = HomeLocationChecker()
  const { buttonValue, updateButton } = useButtonStore()
  const { validate } = useShapeValidation();
  const navigate = useNavigate();

  const buttonClick = () => {
    if (locationIsHome) {
      updateButton({ toContinue: true, text: 'VALIDATE' });
      navigate('/validation');
    } else {
      const result = validate();
      if(result){
        alert(true)
      }else{
        alert(false)
      }
    }
  }; 

  return (
    <div className="h-full flex flex-col items-center  justify-around gap-6">
      <Commandtext />
      <ImageAndSelectionContainer />
      <MainButton clickFunction={buttonClick} text={buttonValue?.text} />
    </div>
  );
}
