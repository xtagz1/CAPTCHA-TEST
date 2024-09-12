import { useLocation } from "react-router-dom";

export const HomeLocationChecker = () => {
    const location = useLocation();
    const locationIsHome = location.pathname === "/";

    return { locationIsHome }
}