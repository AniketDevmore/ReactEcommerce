import React, { useState } from "react";
import "./Login.css"
import { Box, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField } from "@mui/material";
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import loginBackground from '../../../public/loginBackground2.jpg'
import { useTranslation } from "react-i18next";
import google from "../../../public/google.png"
import facebook from "../../../public/facebook.png"

const Login = () => {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="loginContainer">
            <img src={loginBackground} alt='farming' className="imageBackground" />
            <div id="inputContainer">
                <div className="btnsContainer">
                    <text id="logIn">{t("loginScreen.login")}</text>
                </div>
                <div className="btnsContainer">
                    <button className="buttonStyle">
                        <img src={google} alt='google' className="iconImage" />
                        <text className="buttonText">{t("loginScreen.google")}</text>
                    </button>
                    <button className="buttonStyle">
                        <img src={facebook} alt='facebook' className="iconImageFb" />
                        <text className="buttonText">{t("loginScreen.facebook")}</text>
                    </button>
                    <button className="buttonStyle">
                        <text className="buttonText">{t("loginScreen.apple")}</text>
                    </button>
                </div>
                <div className="horContainer">
                    <div className="horLine"></div>
                    <text id="orText">OR</text>
                    <div className="horLine"></div>
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
                        label="User Name"
                        variant="filled"
                    // value={'aaa'}
                    />
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                        <FilledInput
                            id="filled-adornment-password"
                            // value={'ppp'}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                </Box>
                <div id="forgetPass">
                    <a><text id="forgetText">{t("loginScreen.forget")}</text></a>
                </div>
                <div className="btnsContainer">
                    <button className="loginButtonStyle"><text className="loginButtonText">{t("loginScreen.login")}</text></button>
                </div>
                <div className="horContainer">
                    <div id="horSingleLine"></div>
                </div>
                <div className="btnsContainer">
                    <text id="accountText">{t("loginScreen.account")}</text>
                    <button className="buttonStyle"><text className="buttonText">{t("loginScreen.signUp")}</text></button>
                </div>
            </div>
        </div>
    )
}

export default Login;