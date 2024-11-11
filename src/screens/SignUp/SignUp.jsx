import React, { useState } from "react";
import "./SignUp.css"
import { Box, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField } from "@mui/material";
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import loginBackground from '../../../public/loginBackground2.jpg'
import { useTranslation } from "react-i18next";
import google from "../../../public/google.png"
import facebook from "../../../public/facebook.png";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const { t } = useTranslation();
    const naviation = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className="signupContainer">
            <img src={loginBackground} alt='farming' className="imageBackgroundSignup" />
            <div id="inputContainerSignup">
                <div className="btnsContainerSignup">
                    <text id="signup">{t("signUpScreen.welcome")}</text>
                </div>
                <div className="btnsContainerSignup">
                    <button className="buttonStyleSignup">
                        <img src={google} alt='google' className="iconImage" />
                        <text className="buttonTextSignup">{t("signUpScreen.google")}</text>
                    </button>
                    <button className="buttonStyleSignup">
                        <img src={facebook} alt='facebook' className="iconImageFb" />
                        <text className="buttonTextSignup">{t("signUpScreen.facebook")}</text>
                    </button>
                    {/* <button className="buttonStyleSignup">
                        <text className="buttonTextSignup">{t("signUpScreen.apple")}</text>
                    </button> */}
                </div>
                <div className="horContainerSignup">
                    <div className="horLineSignup"></div>
                    <text id="orTextSignup">OR</text>
                    <div className="horLineSignup"></div>
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
                     <TextField
                        id="filled-basic"
                        label="Email"
                        variant="filled"
                    // value={'aaa'}
                    />
                     <TextField
                        id="filled-basic"
                        label="Phone Number"
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
                <div id="forgetPassSignup">
                    <Link to={"/ForgotPass"}><text id="forgetTextSignup">{t("signUpScreen.forget")}</text></Link>
                </div>
                <div className="btnsContainerSignup">
                    <button className="loginButtonStyle"><text className="loginButtonText">{t("signUpScreen.signUp")}</text></button>
                </div>
                <div className="horContainerSignup">
                    <div id="horSingleLineSignup"></div>
                </div>
                <div className="btnsContainerSignup">
                    <text id="accountTextSignup">{t("signUpScreen.account")}</text>
                    <button className="buttonStyleSignup"><text className="buttonTextSignup">{t("signUpScreen.logIn")}</text></button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;