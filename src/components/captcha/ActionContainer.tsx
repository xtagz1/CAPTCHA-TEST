import Commandtext from "../common/Commandtext";
import MainButton from "../common/MainButton";
import ImageAndSelectionContainer from "./ImageAndSelectionContainer";
import { useButtonStore } from "@/stores/buttonValueStore";
import { HomeLocationChecker } from "@/hooks/HomeLocationChecker";
import useShapeValidation from "@/hooks/UseShapeValidation";
import { useNavigate } from "react-router-dom";
import useSweetAlert from "../common/Sweetalert";
import { useSelectedShapeIndicesStore } from "@/stores/shapeIndices";
import { useAttemptStore } from "@/stores/attemptStore";
import { GenerateRandomShapesIndices } from "@/hooks/GenerateRandomShapesIndices";
import { GenerateRandomCommands } from "@/hooks/GenerateRandomCommands";


export default function ActionContainer() {
    
  const { locationIsHome } = HomeLocationChecker()
  const { buttonValue, updateButton } = useButtonStore()
  const { validate } = useShapeValidation();
  const { showAlert } = useSweetAlert();
  const { updateSelectedShapeIndices } = useSelectedShapeIndicesStore()
  const { updateNumberofAttempts, attempts } = useAttemptStore()
  const { generateAndUpdateIndices } = GenerateRandomShapesIndices()
  const { generateCommands } = GenerateRandomCommands() 
  const navigate = useNavigate();

  const handleValidationSuccess = () => {
    updateSelectedShapeIndices([])
    navigate('/asd');  //random for not found
    setTimeout(() => {
      navigate('/pass'); 
    }, 150);  
  };

  const handleValidationError = () => {
    generateAndUpdateIndices()
    generateCommands()
    updateSelectedShapeIndices([])
    if (attempts <= 0) {
      navigate('/asd');  
      setTimeout(() => {
        navigate('/error'); 
      }, 150);  
    }
    
  };


  const buttonClick = () => {
    if (locationIsHome) {
      updateButton({ toContinue: true, text: 'VALIDATE' });
      navigate('/validation');
    } else {
      const result = validate();
      if (result) {
        showAlert("You Pass the validation", "Congratulations! You successfully passed.", "success", handleValidationSuccess);
      } else {
        updateNumberofAttempts( attempts-1 )
        showAlert(
          "Validation error",
          `You have ${attempts} ${attempts === 1 ? 'try' : 'tries'} left`, 
          "error",
          handleValidationSuccess,
          handleValidationError
        );
        
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
