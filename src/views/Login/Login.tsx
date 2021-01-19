import { Checkbox, FormControlLabel, FormGroup, TextField } from '@material-ui/core';
import React, { useContext, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../assets/functions';
import UserCTX from '../../CTX/CTX';
import './Login.scss';
import Google from '../../assets/SVGs/google.svg'
function Login() {
    const email: any = useRef("");
    const password: any = useRef("");
    const history: any = useHistory();
    const rememberUser: any = useRef("");
    const [checked, setChecked] = React.useState(false);
    const context: any = useContext(UserCTX)


    useEffect(() => {
        if (!context.signOut) {
            history.push('/profile');
        }
    }, [history, context.signOut]);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    async function handleSubmit(e: any, type: string) {
        e.preventDefault();
        try {
            await loginUser(
                email.current.value,
                password.current.value,
                context.setUserData,
                context.setSignOut,
                type,
                rememberUser.current.checked
            )
            await history.push('/profile')
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <section id="login">
            <form id="login-card" onSubmit={(e) => e.preventDefault()}>
                <h1>Login</h1>
                <Link to="/signup">Don't have an account? Create an Account</Link>
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
                <span id="login-button">

                    <input type="submit" value="Login" id="input-login-button" onClick={(e: any) => handleSubmit(e, "email")} />
                </span>
                <hr />
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