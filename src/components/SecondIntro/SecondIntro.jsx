import React, { useEffect, useRef } from "react";
import './secondIntro.css'
import secondIntro from '../../assets/lottie/secondIntro.json';
import { useTranslation } from "react-i18next";
import lottie from 'lottie-web';
import { useNavigate } from "react-router-dom";

const SecondIntro = ({ route }) => {
    const { t } = useTranslation();
    const animationContainer = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: secondIntro,
        });

        return () => animation.destroy();
    }, []);

    const handleNextPress = () => {
        route.setIntroIndex(2);
    }

    const handleSkipPress = () => {
        navigate('/login');
        localStorage.setItem('skipIntro', true);
    }

    return (
        <div className="secondIntroContainer">
            <div className="leftSide">
                <div id="animation" ref={animationContainer} />
            </div>
            <div className="rightSide">
                <div className="rightSideInner">
                    <p>{t('introScreen.secondIntroTitle')}</p>
                    <p>{t('introScreen.secondIntroDescription')}</p>
                    <div className="btnContainer">
                        <button onClick={handleSkipPress}><span className="spanText">{t('introScreen.skip')}</span></button>
                        <button onClick={handleNextPress}><span className="spanText">{t('introScreen.next')}</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondIntro;