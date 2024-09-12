import Commandtext from "../common/Commandtext";
import MainButton from "../common/MainButton";
import ImageAndSelectionContainer from "./ImageAndSelectionContainer";
import { useNavigate } from "react-router-dom";
import { useButtonStore } from "@/stores/buttonValueStore";
import { useCommandStore } from "@/stores/commandTextStore";
import { HomeLocationChecker } from "@/hooks/HomeLocationChecker";

export default function ActionContainer() {
  
  const navigate = useNavigate()
  const { locationIsHome } = HomeLocationChecker()
  const { buttonValue, updateButton } = useButtonStore()
  const { command  } = useCommandStore()

  // Function to handle button click
  const buttonClick = () => {
    if (locationIsHome) {
      updateButton({ toContinue:true, text: 'VALIDATE' })
      navigate('/validation')  
    } else {
      alert('clicked!!!!');
      console.log('chuchu')
    }
  };


  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <Commandtext text={command?.text} />
      <ImageAndSelectionContainer />
      <MainButton clickFunction={buttonClick} text={buttonValue?.text} />
    </div>
  );
}
