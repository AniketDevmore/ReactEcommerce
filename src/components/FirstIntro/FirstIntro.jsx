import React, { useEffect, useRef } from "react";
import './FirstIntro.css'
import firstIntro from '../../assets/lottie/firstIntro.json';
import { useTranslation } from "react-i18next";
import lottie from 'lottie-web';
import { useNavigate } from "react-router-dom";

const FirstIntro = ({ route }) => {
    const { t } = useTranslation();
    const animationContainer = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: firstIntro,
        });

        return () => animation.destroy();
    }, []);

    const handleNextPress = () => {
        route.setIntroIndex(1);
    }

    const handleSkipPress = () => {
        console.log('----------->>')
        navigate('/login');
        localStorage.setItem('skipIntro', true);
    }

    return (
        <div className="firstIntroContainer">
            <div className="leftSide">
                <div id="animation" ref={animationContainer} />
            </div>
            <div className="rightSide">
                <div className="rightSideInner">
                    <p>{t('introScreen.firstIntroTitle')}</p>
                    <p>{t('introScreen.firstIntroDescription')}</p>
                    <div className="btnContainer">
                        <button onClick={handleSkipPress}><span className="spanText">{t('introScreen.skip')}</span></button>
                        <button onClick={handleNextPress}><span className="spanText">{t('introScreen.next')}</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstIntro;