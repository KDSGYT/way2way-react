import React, { useContext, useEffect, useRef } from 'react';
import { TextField } from '@material-ui/core';
import './Signup.scss';
import { createUser } from '../../assets/functions';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import Google from '../../assets/SVGs/google.svg'
import { firebaseAuth } from '../../Util/firebase';
import UserInfo from './UserInfo/UserInfo';
import { useUserData, useUserSignedOut } from '../../assets/Hooks';
import UserCTX from '../../CTX/CTX';

function Signup() {

    const password: any = useRef("")
    const email: any = useRef()
    const history: any = useHistory();
    const [signOut] = useUserSignedOut();
    const [userData] = useUserData();
    const { signup, setSignup, setCreatingAccount }: any = useContext(UserCTX)
    const { path, url } = useRouteMatch();


    async function handleClick(e: any) {
        e.preventDefault()

        const data = {
            email: email.current.value,
            photoURL: "",
            postedAds: 0
        }
        console.log(data)
        // Account is created using Email and password
        /**
         *  @param data - user information as entered on the signup page
         *  @param password - as entered by the user
         */
        try {
            await createUser(data, password.current.value)
        } catch (e) {

        }
        // user will be redirected to another page where the user is required to enter addition information
        history.push(`${url}/user-info`)
    }

    useEffect(() => {
        if (!signOut && !signup) {
            history.push('/profile')
        } else if (!signOut && signup) {
            history.push('/signup/user-info')
        }
        // const currentuser = firebaseAuth.currentUser;
        // console.log(currentuser)
    }, [signOut, history, userData, signup]);


    useEffect(() => {
        /**
         * set the signup state to true 
         * * prevents unwanted redirect to profile when logged in
         */
        setSignup(true)
        setCreatingAccount(true)
        return () => {
            setCreatingAccount(false)
        }
    }, [])

    useEffect(() => {
        console.log(signup)

    }, [signup])


    return (
        <section id="sign-up">
            <Route path={`/signup`} exact>
                <form id="sign-up-card" onSubmit={handleClick}>
                    <h1>SignUp</h1>
                    <TextField
                        id="email"
                        inputRef={email}
                        required
                        type="email"
                        label="Email"
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

                    {/* <TextField
                        inputRef={confirmPassword}
                        required
                        type="password"
                        label="Confirm Password"
                        variant="outlined"
                        autoComplete="off"

                    /> */}
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

            </Route>
            <Switch>
                <Route path={`/signup/user-info`} >
                    <UserInfo />
                </Route>
            </Switch>
        </section >

    )
}
export default Signup; 