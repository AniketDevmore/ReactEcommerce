import React, { useEffect, useRef } from "react";
import './thirdIntro.css'
import thirdIntro from '../../assets/lottie/thirdIntro.json';
import { useTranslation } from "react-i18next";
import lottie from 'lottie-web';
import { useNavigate } from "react-router-dom";

const ThirdIntro = ({ route }) => {
    const { t } = useTranslation();
    const animationContainer = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: thirdIntro,
        });

        return () => animation.destroy();
    }, []);

    const handleNextPress = () => {
        navigate('/login')
        localStorage.setItem('skipIntro', true);
    }

    return (
        <div className="thirdIntroContainer">
            <div className="leftSide">
                <div id="animation" ref={animationContainer} />
            </div>
            <div className="rightSide">
                <div className="rightSideInner">
                    <p>{t('introScreen.thirdIntroTitle')}</p>
                    <p>{t('introScreen.thirdIntroDescription')}</p>
                    <div className="btnContainer">
                        {/* <button><span className="spanText">Skip</span></button> */}
                        <button onClick={handleNextPress}><span className="spanText">{t('introScreen.next')}</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdIntro;