import React, { useEffect, useState } from "react";
import './Intro.css';
import '../../shared/theme/colors.css'
import FirstIntro from "../../components/FirstIntro/FirstIntro";
import SecondIntro from "../../components/SecondIntro/SecondIntro";
import ThirdIntro from "../../components/ThirdIntro/ThirdIntro";
import { useNavigate } from "react-router-dom";

const Intro = () => {
    const [introIndex, setIntroIndex] = useState(0);
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate();


    useEffect(() => {
        const intro = localStorage.getItem('skipIntro');
        if (intro) {
            navigate('/login');
            setLoader(false);
        } else {
            navigate('/');
            setLoader(false)
        }
    }, [])

    if (loader) {
        return <p>loading....</p>
    }

    return (
        <div className="outerDiv">
            {introIndex === 0 && <FirstIntro route={{
                setIntroIndex: setIntroIndex
            }} />}
            {introIndex === 1 && <SecondIntro route={{
                setIntroIndex: setIntroIndex
            }} />}
            {introIndex === 2 && <ThirdIntro route={{
                setIntroIndex: setIntroIndex
            }} />}
        </div>
    )
}

export default Intro;