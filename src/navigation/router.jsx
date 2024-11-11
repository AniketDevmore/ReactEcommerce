import { createBrowserRouter } from "react-router-dom";
import Intro from "../screens/Intro/Intro";
import Login from "../screens/Login/Login";
import SkipIntroRoute from "./SkipIntroRoute";
import SignUp from "../screens/SignUp/SignUp";
import ForgotPass from "../screens/ForgotPass/ForgotPass";

const skipIntroRoute = () => {
    let intro = localStorage.getItem('skipIntro');
    console.log('skipIntro------>>', intro);

    return intro;
} 

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Intro />
    },
    {
        path: '/login',
        element: (<SkipIntroRoute>
            <Login />
        </SkipIntroRoute>),
    },
    {
        path: '/SignUp',
        element: (<SkipIntroRoute>
            <SignUp />
        </SkipIntroRoute>),
    },
    {
        path: '/ForgotPass',
        element: (<SkipIntroRoute>
            <ForgotPass />
        </SkipIntroRoute>),
    },
])