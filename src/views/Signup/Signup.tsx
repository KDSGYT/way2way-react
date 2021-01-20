import React, { useEffect, useRef } from 'react';
import { TextField } from '@material-ui/core';
import './Signup.scss';
import { createUser } from '../../assets/functions';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import Google from '../../assets/SVGs/google.svg'
import { firebaseAuth } from '../../Util/firebase';
import UserInfo from './UserInfo/UserInfo';
import { useUserSignedOut } from '../../assets/Hooks';

function Signup() {

    const firstName: any = useRef("")
    const lastName: any = useRef("")
    const phone: any = useRef("")
    const password: any = useRef("")
    const confirmPassword: any = useRef("")
    const email: any = useRef()
    const history: any = useHistory();
    const [signOut] = useUserSignedOut()
    let location = useLocation();

    async function handleClick(e: any) {
        const data = {
            displayName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            phoneNumber: phone.current.value,
            photoURL: "",
            postedAds: 0
        }
        await createUser(data, password.current.value)
        history.push('/profile')
    }

    useEffect(() => {
        if (!signOut) {
            history.push('/profile')
        }
        const currentuser = firebaseAuth.currentUser;
        console.log(currentuser)
    }, [signOut, history]);




    return (
        <section id="sign-up">
            <form id="sign-up-card" onSubmit={async (e) => await password.current.value === confirmPassword.current.value ? handleClick(e) : console.log('Password Does not match')}>
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
                    required
                    type="email"
                    label="Username"
                    variant="outlined"
                    autoComplete="off"
                />

                <TextField
                    id="password"
                    inputRef={password}
                    required
                    type="password"
                    label="Password"
                    variant="outlined"
                    autoComplete="off"

                />

                <TextField
                    id="password"
                    inputRef={confirmPassword}
                    required
                    type="password"
                    label="Confirm Password"
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
            <div id="signup-art">
                <p>Create Your Account</p>
                <div id="art"></div>
            </div>

            <Switch>
                <Route path={`${location}/user-info`} >
                    <UserInfo />
                </Route>
            </Switch>
        </section >

    )
}
export default Signup; 