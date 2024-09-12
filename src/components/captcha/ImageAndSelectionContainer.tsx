import CaptchaBox from "../common/CaptchaBox";


interface ImageAndSelectionContainerProps {
  toContinue: boolean;
}


export default function ImageAndSelectionContainer({ toContinue }: ImageAndSelectionContainerProps) {
  

  return (
    <div className="border relative">
      <img
        className="max-h-[22rem]"
        src="https://res.cloudinary.com/jonixxx/image/upload/v1726092714/selfie-image_cijkdo.jpg"
      />
    <CaptchaBox toContinue={toContinue}/>
    </div>
  );
}
