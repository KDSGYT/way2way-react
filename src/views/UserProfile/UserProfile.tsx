import Button from '@material-ui/core/Button';
import React, { useContext, useEffect } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { useUserSignedOut } from '../../assets/Hooks';
import UserCTX from '../../CTX/CTX';
import { firebaseAuth } from '../../Util/firebase';
import PostAccAdd from './PostAccAdd/PostAccAdd';
import './UserProfile.scss'

function UserProfile() {

    const history = useHistory() // History indicates browser history
    const context: any = useContext(UserCTX);//Global CTX to get the information
    const {  url } = useRouteMatch();
    const [signOut, setSignOut] = useUserSignedOut()  //custom hook to get or set user signout
    // const [userData] = useUserData();
    // const currentUser: any = firebaseAuth.currentUser;
    /**
     * signout the user and redirect to the login page
     */
    function signout() {
        firebaseAuth.signOut(); //signout the user from firebase
        setSignOut(true);
        context.setUserData({}); //clear the state when the user signsout
        history.push('/login')
    }

    // Check if the user is signedout then redirect to the login page
    useEffect(() => {
        // console.log(userData)
        if (signOut) {
            history.push('/login');

            // need to create a redirect here when the user has not entered the information for the account yet in the db
        }// } else if (!signout && currentUser.uid) {
        //     history.push('/signup/user-info')
        // }
    }, [signOut, history]);


    return (
        <section id="user-profile" className={'display-as-flex'}>
            <Switch>

                <Route exact path={url}>
                    {() => {
                        // console.log(value.userData)
                        // if(value.userData) return null
                        try {
                            const defaultPhotoUrl = 'https://via.placeholder.com/200x200.png?text=User';
                            const {
                                displayName = "",
                                email,
                                // phoneNumber,
                                //userprofile url with default url if the images goes not exist
                                photoURL = defaultPhotoUrl
                            } = context.userData;

                            /**
                             * If the URL is defined and URL is not equal to DEFAULT URL then 
                             * replace the 96 ( resolution of the image ) in url with 496 (higher resolution of image )
                             * 
                             * The numbers above are present in the URL sent by GOOGLE and can be manipulated to get desired Image quality
                             */
                            const DPURL = photoURL !== null && photoURL.length > 3 ? photoURL.replace('96', '496') : defaultPhotoUrl

                            return (
                                <div id="user-profile-card" className={'display-as-flex'}>

                                    {/* upper portion of the card containing the user profile image */}
                                    <div className={'display-as-flex'} id="upper-portion">

                                        <span id="dp-container">
                                            {/* 96 is replaced with 296 in the photourl to get high resolution image */}
                                            <img src={DPURL} alt="something" />
                                        </span>
                                    </div>

                                    {/* lower portion of the card containing all the other information and buttons */}
                                    <div id="lower-portion" className={'display-as-flex'}>

                                        <h1>{displayName}</h1>
                                        <h2>{email}</h2>
                                        {/* <h3>{phoneNumber}</h3> */}

                                        {/* buttons to signout and post ad */}
                                        <div id="profile-button" className={'display-as-flex'} >

                                            {/* signout button */}
                                            <Button
                                                variant="outlined"
                                                id="sign-out-button"
                                                type="button"
                                                onClick={() => signout()}
                                            >Signout</Button>

                                            {/* Link to post ad view */}
                                            <Button
                                                variant="outlined"
                                                onClick={() => history.push(`${url}/post`)}
                                            >
                                                Post Ad
                                        </Button>
                                        </div>

                                    </div>
                                </div>
                            )
                        } catch (e) {
                            window.location.reload()
                        }
                    }}
                </Route>

                {/* Defined route to the postad view */}
                <Route path={`${url}/post`}>
                    <PostAccAdd />
                </Route>
            </Switch>

        </section>
    )
}
export default UserProfile;