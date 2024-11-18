import React from "react";
import './ForgotPass.css'
import { Box, TextField } from "@mui/material";
import loginBackground from '../../../public/loginBackground2.jpg'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
    const { t } = useTranslation();
    const navigatation = useNavigate()

    const signUpHandler = () => {
        navigatation('/SignUp')
    }

    return (
        <div className="forgotContainer">
            <img src={loginBackground} alt='farming' className="imageBackground" />
            <div id="inputContainerForgot">
                <div className="btnsContainerForgot">
                    <text id="forgot">{t("forgotScreen.welcome")}</text>
                </div>

                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '70%' } }}
                    noValidate
                    autoComplete="off"
                    className="box"
                >
                    <TextField
                        id="filled-basic"
                        label="Email"
                        variant="filled"
                    // value={'aaa'}
                    />
                    <div className="horContainerForgot">
                        <div className="horLine"></div>
                        <text id="orText">OR</text>
                        <div className="horLine"></div>
                    </div>
                    <TextField
                        id="filled-basic"
                        label="Phone Number"
                        variant="filled"
                    // value={'aaa'}
                    />

                </Box>
                <div className="btnsContainerForgot">
                    <button className="loginButtonStyle"><text className="loginButtonText">{t("forgotScreen.forgot")}</text></button>
                </div>
                <div className="horContainerForgot">
                    <div id="horSingleLine"></div>
                </div>
                <div className="btnsContainerForgot">
                    <text id="accountText">{t("forgotScreen.account")}</text>
                    <button onClick={signUpHandler} className="buttonStyle"><text className="buttonText">{t("forgotScreen.signUp")}</text></button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass;