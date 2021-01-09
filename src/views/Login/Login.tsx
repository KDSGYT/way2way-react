import { TextField } from '@material-ui/core';
import React, { useRef,useContext } from 'react';
import { loginUser } from '../../assets/functions';
import UserCTX from '../../CTX/CTX';
import './Login.scss';
function Login() {
    const CTX:any = useContext(UserCTX);
    const email: any = useRef("")
    const password: any = useRef("")

    async function handleSubmit(e: any) {
        e.preventDefault();
        await loginUser(email.current.value, password.current.value, CTX.setUserData)
    }

    // React.useEffect(() => {
    //     console.log(typeof dataCTX.setUserData)
    // }, []);

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