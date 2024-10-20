import { Navigate } from "react-router-dom";

function SkipIntroRoute ({children}) {
    const intro = localStorage.getItem('skipIntro');
    console.log('skipIntro------>>', intro, children);

    return (intro && intro !== "undefined") ? children : <Navigate to="/" />;
} 

export default SkipIntroRoute;