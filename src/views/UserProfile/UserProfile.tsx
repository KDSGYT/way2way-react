import React, { useContext, useEffect } from 'react';
import { Link, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import UserCTX from '../../CTX/CTX';
import { firebaseAuth } from '../../Util/firebase';
import PostAccAdd from './PostAccAdd/PostAccAdd';
import './UserProfile.scss'
function UserProfile() {
    const history = useHistory()
    const context: any = useContext(UserCTX);
    const { path, url } = useRouteMatch();
    function signout(setSignOut: any) {
        firebaseAuth.signOut();
        setSignOut(true);
        context.setUserData({});
        history.push('/login')
    }

    useEffect(() => {

        if (context.signOut) {
            history.push('/login');
        }

    }, [context.signOut]);

    return (
        <section id="user-profile" >
            <Link to={`${url}/post`} >Click</Link>
            <Route exact path={`${path}`}>
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
                                    onClick={() => signout(value.setSignOut)
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