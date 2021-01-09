import { TextField } from '@material-ui/core';
import React, { useRef } from 'react';
import { loginUser } from '../../assets/functions';
import './Login.scss';
function Login() {

    const email: any = useRef("")
    const password: any = useRef("")

    async function handleSubmit(e: any) {
        e.preventDefault();
        await loginUser(email.current.value, password.current.value)
    }

    return (
        <section id="login">
            <form id="login-card">
                <TextField id="email" inputRef={email} required type="email" label="UserName or E-Mail" variant="outlined" />
                <TextField id="password" inputRef={password} required type="password" label="Password" variant="outlined" />
                <input type="submit" onClick={handleSubmit} />
            </form>
        </section>
    )
}
export default Login;