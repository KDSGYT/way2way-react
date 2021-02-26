import React, { useContext, useEffect, useRef } from 'react';
import './Signup.scss';
import { TextField } from '@material-ui/core';
import { createUser } from '../../assets/functions';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import UserInfo from './UserInfo/UserInfo';
import { useUserData, useUserSignedOut } from '../../assets/Hooks';
import UserCTX from '../../CTX/CTX';
import Google from '../../assets/SVGs/google.svg'

function Signup() {

    const password: any = useRef() //Ref to get the password field value
    const email: any = useRef() //Ref to get the email value
    const [signOut] = useUserSignedOut(); //Custom hook to extract the signout global state value
    const [userData] = useUserData(); //Custom hook to extract user data from global state
    const { signup, setSignup, setCreatingAccount }: any = useContext(UserCTX) //UserCTX for accessing functions
    const history: any = useHistory(); //history object used for redirection
    const { url } = useRouteMatch(); //Current URL SLUG


    /**
     * 
     * @param event Event Object 
     */
    async function handleClick(event: any) {
        // Prevent the page from reloading when the form is submitted
        event.preventDefault()

        // Data object to be used to create the account
        const data = {
            email: email.current.value,
            photoURL: "",
            postedAds: 0
        }

        // Account is created using Email and password
        /**
         *  @param data - user information as entered on the signup page
         *  @param password - as entered by the user
         */
        await createUser(data, password.current.value)

        // user will be redirected to another page where the user is required to enter addition information
        history.push(`${url}/user-info`)
    }
    /**
     * Important redirections
     */
    useEffect(() => {
        // Redirect to profile page if the user is loggedIN
        if (!signOut && !signup) {
            history.push('/profile')

            // redirect the user to user-info page to enter additional inforamtion about the account
        } else if (!signOut && signup) {
            history.push('/signup/user-info')
        }
    }, [signOut, history, userData, signup]);


    useEffect(() => {
        /**
         * set the signup state to true 
         * * prevents unwanted redirect to profile when logged in
         */
        setSignup(true)

        /**
         * Change the state creating account to true
         * This helps in redirection
         */
        setCreatingAccount(true)

        // When the user exits the page change the creating account state to false

        return () => {
            setCreatingAccount(false)
        }
    }, [setSignup, setCreatingAccount])

    return (
        <section id="sign-up" className="display-flex">
            
            {/* Route declared so when the user visits the user-info page the signup form is not visible */}
            <Route path={`/signup`} exact>

                {/* Signup Form */}
                <form id="sign-form" className="display-flex" onSubmit={handleClick}>
                
                    {/* Signup Heading for decoration */}
                    <h1>SignUp</h1>

                    {/* Input field for email */}
                    <TextField
                        id="email"
                        inputRef={email}
                        type="email"
                        label="Email"
                        variant="outlined"
                        autoComplete="off"
                        required
                    />

                    {/* Inputfield for password */}
                    <TextField
                        id="password"
                        inputRef={password}
                        type="password"
                        label="Password"
                        variant="outlined"
                        autoComplete="off"
                        required

                    />
                    {/* Submit Button */}
                    <div id="signup-button">
                        <input type="submit" value="Sign Up" id="input-signup-button" />
                    </div>
                    {/* Below this comment the rest section of the page is not visible for the time being  but may appear in future updated*/}
                    <hr />
                    {/* Alternative login buttons to is the user wants to signup with google */}
                    <p id="alternative-signup-button">

                        Or SignUp with: 
                        
                        {/* Login with google Button */}
                        <button className="signup-button"  >
                            <img src={Google} alt="" />
                        </button>
                    </p>
                </form>
                {/* singup art on the right of page  */}
                <div id="signup-art">
                    <p>Create Your Account</p>
                    <div id="art"></div>
                </div>

            </Route>
            {/* Route to User-info page */}

            <Switch>
                {/* Route to User-info page */}
                <Route path={`/signup/user-info`} >
                    {/* User info object */}
                    <UserInfo />
                </Route>
            </Switch>
        </section >

    )
}
export default Signup; 