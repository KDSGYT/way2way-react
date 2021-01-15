import React, { useContext, useEffect, useRef } from 'react';
import { FormControl, FormControlLabel, TextField } from '@material-ui/core';
import './Signup.scss';
import { createUser } from '../../assets/functions';
import { Link, useHistory } from 'react-router-dom';
import UserCTX from '../../CTX/CTX';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import Google from '../../assets/SVGs/google.svg'

function Signup() {
    const name: any = useRef("")
    const phone: any = useRef("")
    const password: any = useRef("")
    const email: any = useRef()
    const history: any = useHistory();
    const context: any = useContext(UserCTX)
    async function handleClick() {
        // console.log(email.current.value)
        const data = {
            name: name.current.value,
            email: email.current.value,
            phone: phone.current.value
        }
        await createUser(data, password.current.value)
        history.push('/profile')
    }

    useEffect(() => {
        if (!context.signOut) {
            history.push('/profile')
        }
    }, [context.signOut, history]);

    return (
        // <section id="sign-up">
        //     <form onSubmit={(e) => e.preventDefault()} id="sign-up-card">
        //         <TextField inputRef={name} required id="f-name" label="Name" variant="outlined" />
        //         <TextField inputRef={password} required id="password" type="password" label="Password" variant="outlined" />
        //         <TextField inputRef={phone} required id="phone" label="Phone " type="tel" variant="outlined" />
        //         <TextField inputRef={email} required id="email" label="E-Mail " type="email" variant="outlined" />
        //         <input type="submit" onClick={handleClick} id="signup" value="SignUp" />
        //     </form>
        // </section>
        <section id="sign-up">
            <form id="sign-up-card">
                <h1>SignUp</h1>
                {/* <Link to="/signup">Don't have an account? Create an Account</Link> */}
                <div id="name">
                    <TextField
                        inputRef={name}
                        required
                        id="f-name"
                        label="First Name"
                        variant="outlined"
                    />

                    <TextField
                        inputRef={name}
                        required
                        id="l-name"
                        label="Last Name" variant="outlined"
                    />
                </div>

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

                <TextField
                    inputRef={phone}
                    required
                    id="phone"
                    label="Phone "
                    type="tel"
                    variant="outlined"
                />

                <div id="signup-button">

                    <input type="submit" value="Sign Up" id="input-signup-button"  />
                </div>
                <hr />
                <p id="alternative-signup-button">
                    Or SignUp with: <button className="signup-button"  >
                        <img src={Google} alt="" />
                    </button>
                </p>
            </form>
            <div id="login-art">
                <p>Create Your Account</p>
                <div id="art"></div>
            </div>

        </section >

    )
}
export default Signup; 