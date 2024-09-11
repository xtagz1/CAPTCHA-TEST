import Commandtext from "./common/Commandtext";
import MainButton from "./common/MainButton";
import ImageAndSelectionContainer from "./ImageAndSelectionContainer";


export default function ActionContainer() {

    const buttonClick = () => {
        alert('clicked!!!!')
    }
    const commandText = 'Take Selfie'


  return (
    <div className="h-full flex flex-col items-center justify-center gap-6">
        <Commandtext text={commandText}/>
        <ImageAndSelectionContainer/>
        <MainButton clickFunction={buttonClick} text={"CONTINUE"} />
    </div>
  )
}
