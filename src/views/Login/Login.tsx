import { TextField } from '@material-ui/core';
import React, { useRef, useContext } from 'react';
import { loginUser } from '../../assets/functions';
import UserCTX from '../../CTX/CTX';
import './Login.scss';
function Login() {
    const email: any = useRef("")
    const password: any = useRef("")

    async function handleSubmit(e: any, setState: any) {
        e.preventDefault();
        await loginUser(email.current.value, password.current.value, setState)
    }

    // React.useEffect(() => {
    //     console.log(typeof dataCTX.setUserData)
    // }, []);

    return (
        <UserCTX.Consumer>
            {(value: any) => (
                <section id="login">
                    <form id="login-card">
                        <TextField id="email" inputRef={email} required type="email" label="UserName or E-Mail" variant="outlined" />
                        <TextField id="password" inputRef={password} required type="password" label="Password" variant="outlined" />
                        <input type="submit" onClick={(e:any) => handleSubmit(e, value.setUserData)} />
                    </form>
                </section>

            )}
        </UserCTX.Consumer>
    )
}
export default Login;