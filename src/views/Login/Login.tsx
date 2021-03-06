import { Checkbox, FormControlLabel, FormGroup, TextField } from '@material-ui/core';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../assets/functions';
import UserCTX from '../../CTX/CTX';
import './Login.scss';
import Google from '../../assets/SVGs/google.svg';
import { useUserData } from '../../assets/Hooks';

function Login() {
    const email: any = useRef("");
    const password: any = useRef("");
    const history: any = useHistory();
    const rememberUser: any = useRef("");
    const [checked, setChecked] = useState(true); //default value for the remember user credentials
    const context: any = useContext(UserCTX)
    const [userData] = useUserData();
    const [error, setError] = useState("")

    // set signup false when the user visits the login page
    useEffect(() => {
        if (!context.creatingAccount) {
            context.setSignup(false)
            console.log(context.signup)
        }
        // else if(context.creatingAccount && context.signup) {
        //     history.push('/signup/user-info')
        // }
    }, [context])

    // track signup changes
    useEffect(() => {
        console.log(context.signup)
    }, [context.signup])
    useEffect(() => {
        if (context.userData.UID) {
            history.push('/profile');
        }
    }, [history, context, userData]);

    // clear the fields when the user enters wrong credentials
    useEffect(() => {
        password.current.value = ""
    }, [error]);


    // Change state when user checks one checkbox
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    // handle Form submission with type og 
    async function handleSubmit(e: any, type: string) {

        e.preventDefault();
        loginUser(
            email.current.value,
            password.current.value,
            context,
            type,
            rememberUser.current.checked,
            setError
        )
    }

    return (
        <section id="login">
            <form id="login-card" onSubmit={(e) => e.preventDefault()} >
                <h1>Login</h1>
                <Link to="/signup">Don't have an account? Create an Account</Link>
                <h4 id="error">
                    {error}

                </h4>
                <TextField
                    id="email"
                    inputRef={email}
                    required type="email"
                    label="Username"
                    variant="outlined"
                    autoComplete="off"
                />
                <TextField
                    id="password"
                    inputRef={password}
                    required type="password"
                    label="Password"
                    variant="outlined"
                    autoComplete="off"
                />
                <FormGroup id="login-options">
                    <FormControlLabel
                        control={
                            <Checkbox
                                inputRef={rememberUser}
                                id="checkbox"
                                checked={checked}
                                onChange={handleChange}
                            />
                        }
                        label={"Remember Me"}
                    />
                    <Link to="/forgot-password" >Forgot Password ?</Link>
                </FormGroup>

                {/* login buttons */}
                <span id="login-button">

                    <input type="submit" value="Login" id="input-login-button" onClick={(e: any) => handleSubmit(e, "email")} />
                </span>
                {/* horizonal line to divide the buttons */}
                <hr />

                {/* SignIn with Google */}
                <p id="alternative-login-button">
                    Or Login with: <button className="login-button" onClick={(e: any) => handleSubmit(e, "google")} >
                        <img src={Google} alt="" />
                    </button>
                </p>
            </form>
            <div id="login-art">
                <p>Welcome Back.</p>
                <div id="art"></div>
            </div>

        </section>

    )
}
export default Login;