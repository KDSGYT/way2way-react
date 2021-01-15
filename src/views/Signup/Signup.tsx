import React, { useContext, useEffect, useRef } from 'react';
import { TextField } from '@material-ui/core';
import './Signup.scss';
import { createUser } from '../../assets/functions';
import { useHistory } from 'react-router-dom';
import UserCTX from '../../CTX/CTX';
import Google from '../../assets/SVGs/google.svg'
import { firebaseAuth } from '../../Util/firebase';

function Signup() {
    const firstName: any = useRef("")
    const lastName: any = useRef("")
    const phone: any = useRef("")
    const password: any = useRef("")
    const email: any = useRef()
    const history: any = useHistory();
    const context: any = useContext(UserCTX)
    async function handleClick(e: any) {
        console.log(email.current.value)
        const data = {
            displayName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            phoneNumber: phone.current.value,
            photoURL: ""
        }
        await createUser(data, password.current.value)
        history.push('/profile')
    }

    useEffect(() => {
        if (!context.signOut) {
            history.push('/profile')
        }
        const currentuser = firebaseAuth.currentUser;
        console.log(currentuser)
    }, [context.signOut, history]);

    return (
        <section id="sign-up">
            <form id="sign-up-card" onSubmit={handleClick}>
                <h1>SignUp</h1>
                {/* <Link to="/signup">Don't have an account? Create an Account</Link> */}
                <div id="name">
                    <TextField
                        inputRef={firstName}
                        required
                        id="f-name"
                        label="First Name"
                        variant="outlined"
                    />

                    <TextField
                        inputRef={lastName}
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

                    <input type="submit" value="Sign Up" id="input-signup-button" />
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