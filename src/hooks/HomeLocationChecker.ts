import { useLocation } from "react-router-dom";


// Checker for home
export const HomeLocationChecker = () => {
    const location = useLocation();
    const locationIsHome = location.pathname === "/";

    return { locationIsHome }
}