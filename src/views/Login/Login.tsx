import { TextField } from '@material-ui/core';
import React, { useContext, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../assets/functions';
import UserCTX from '../../CTX/CTX';
import './Login.scss';

function Login() {
    const email: any = useRef("")
    const password: any = useRef("")
    const history: any = useHistory();
    const context: any = useContext(UserCTX)

    useEffect(() => {
        if (!context.signOut) {
            history.push('/profile');
        }
    }, [history, context.signOut]);

    async function handleSubmit(e: any, type: string) {
        e.preventDefault();
        try {
            await loginUser(email.current.value, password.current.value, context.setUserData, context.setSignOut, type)
            await history.push('/profile')
        } catch (e){
            console.log(e)
        }

    }

    return (
        <section id="login">
            <form id="login-card">
                <TextField id="email" inputRef={email} required type="email" label="UserName or E-Mail" variant="outlined" />
                <TextField id="password" inputRef={password} required type="password" label="Password" variant="outlined" />
                <input type="submit" onClick={(e: any) => handleSubmit(e, "email")} />
                <hr />
                <input type="button" onClick={(e: any) => handleSubmit(e, "google")} value="Sign In With Google" />
            </form>
        </section>

    )
}
export default Login;