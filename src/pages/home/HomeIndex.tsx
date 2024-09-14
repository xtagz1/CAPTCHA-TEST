import MainBoxLayout from "@/components/captcha/MainBoxLayout";
import { HomeLocationChecker } from "@/hooks/HomeLocationChecker";
import { useAttemptStore } from "@/stores/attemptStore";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomeIndex = () => {
  const location = useLocation()
  const { locationIsHome } = HomeLocationChecker();
  const { updateNumberofAttempts } = useAttemptStore();

  useEffect(() => {
    if (locationIsHome) {
      updateNumberofAttempts(2);
    }
  }, [location]); 

  return (
    <div className="border flex items-center justify-center h-[100dvh]">
      <MainBoxLayout />
    </div>
  );
};

export default HomeIndex;
