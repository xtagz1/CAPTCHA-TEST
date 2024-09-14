import Commandtext from "../common/Commandtext";
import MainButton from "../common/MainButton";
import ImageAndSelectionContainer from "./ImageAndSelectionContainer";
import { useButtonStore } from "@/stores/buttonValueStore";
import { HomeLocationChecker } from "@/hooks/HomeLocationChecker";
import useShapeValidation from "@/hooks/UseShapeValidation";
import { useNavigate } from "react-router-dom";
import useSweetAlert from "../common/Sweetalert";

export default function ActionContainer() {
    
  const { locationIsHome } = HomeLocationChecker()
  const { buttonValue, updateButton } = useButtonStore()
  const { validate } = useShapeValidation();
  const { showAlert } = useSweetAlert();
  
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/pass')
  };

  const handleError = () => {
    console.log("Error function executed!");
  };


  const buttonClick = () => {
    if (locationIsHome) {
      updateButton({ toContinue: true, text: 'VALIDATE' });
      navigate('/validation');
    } else {
      const result = validate();
      if (result) {
        showAlert("You Pass the validation", "Congratulations! You successfully passed.", "success", handleSuccess);
      } else {
        showAlert("Validation error", "You have tries left", "error", handleSuccess, handleError );
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
