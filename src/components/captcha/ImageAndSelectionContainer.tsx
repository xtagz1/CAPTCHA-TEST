import CaptchaBox from "./CaptchaBox";


interface ImageAndSelectionContainerProps {

}

export default function ImageAndSelectionContainer({ }: ImageAndSelectionContainerProps) {
  
  return (
    <div className="border relative">
      <img
        className="max-h-[22rem]"
        src="https://res.cloudinary.com/jonixxx/image/upload/v1726092714/selfie-image_cijkdo.jpg"
      />
    <CaptchaBox/>
    </div>
  );
}
