import React, { useState } from "react";
import "./Login.css"
import { Box, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField } from "@mui/material";
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import loginBackground from '../../../public/loginBackground2.jpg'

const Login = () => {
    console.log('first')
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
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '70%' } }}
                    noValidate
                    autoComplete="off"
                    className="box"
                >
                    <TextField id="filled-basic" label="User Name" variant="filled" value={'aaa'}/>
                    {/* <TextField
                    required
                    id="filled-required"
                    label="User Name"
                    defaultValue="Hello World"
                    variant="filled"
                /> */}
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                        <FilledInput
                            id="filled-adornment-password"
                            value={'ppp'}
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
            </div>
        </div>
    )
}

export default Login;