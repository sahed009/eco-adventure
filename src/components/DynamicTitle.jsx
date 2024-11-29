import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
    const location = useLocation();

    const routeTitles = {
        "/": "Home - EcoAdventure",
        "/login": "Login - EcoAdventure",
        "/register": "Register - EcoAdventure",
        "/profile": "Profile - EcoAdventure",
        "/update-profile": "Update Profile - EcoAdventure",
        "/adventure/:slug": "Adventure Details - EcoAdventure",
        "/forgot-password": "Forgot Password - EcoAdventure",
        "*": "Page Not Found - EcoAdventure",
    };

    useEffect(() => {
        const title = routeTitles[location.pathname] || "EcoAdventure";
        document.title = title;
    }, [location.pathname]);

    return null;
};

export default DynamicTitle;
