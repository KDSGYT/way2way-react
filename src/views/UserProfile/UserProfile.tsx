import React, { useContext, useEffect } from 'react';
import { Link, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { useUserSignedOut } from '../../assets/Hooks';
import UserCTX from '../../CTX/CTX';
import { firebaseAuth } from '../../Util/firebase';
import PostAccAdd from './PostAccAdd/PostAccAdd';
import './UserProfile.scss'
function UserProfile() {
    const history = useHistory()
    const context: any = useContext(UserCTX);
    const { path, url } = useRouteMatch();
    const [signOut, setSignOut] = useUserSignedOut()

    function signout() {
        firebaseAuth.signOut();
        setSignOut(true);
        context.setUserData({});
        history.push('/login')
    }

    useEffect(() => {

        if (signOut) {
            history.push('/login');
        }

    }, [signOut, history]);

    return (
        <section id="user-profile" >
            <Route exact path={`${path}`}>
                <Link to={`${url}/post`} >Click</Link>
                <UserCTX.Consumer>
                    {(value: any) => {
                        const {
                            name,
                            email,
                            phone
                        } = value.userData;

                        return (
                            <div id="user-profile-card">
                                <h1>{name}</h1>
                                <h2>{email}</h2>
                                <h3>{phone}</h3>
                                <input
                                    type="button"
                                    value="signout"
                                    onClick={() => signout()
                                    } />
                            </div>
                        )
                    }}
                </UserCTX.Consumer>
            </Route>
            <Switch>
                <Route path={`/profile/post`}>
                    <PostAccAdd />
                </Route>
            </Switch>
        </section>
    )
}
export default UserProfile;