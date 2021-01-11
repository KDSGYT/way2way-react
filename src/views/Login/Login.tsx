import { TextField } from '@material-ui/core';
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../assets/functions';
import UserCTX from '../../CTX/CTX';
import './Login.scss';

function Login() {
    const email: any = useRef("")
    const password: any = useRef("")
    const history: any = useHistory();
    async function handleSubmit(e: any, setState: any, setSignOut: any) {
        e.preventDefault();
        try {
            await loginUser(email.current.value, password.current.value, setState, setSignOut)
            history.push('/profile');
        } catch {
        }

    }

    return (
        <UserCTX.Consumer>
            {(value: any) => {
                if (value.signout) {
                    history.push('/profile');
                } else {
                    return (
                        <section id="login">
                            <form id="login-card">
                                <TextField id="email" inputRef={email} required type="email" label="UserName or E-Mail" variant="outlined" />
                                <TextField id="password" inputRef={password} required type="password" label="Password" variant="outlined" />
                                <input type="submit" onClick={(e: any) => handleSubmit(e, value.setUserData, value.setSignOut)} />
                            </form>
                        </section>
                    )
                }

            }}
        </UserCTX.Consumer>
    )
}
export default Login;