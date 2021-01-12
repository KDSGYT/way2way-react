import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserCTX from '../../CTX/CTX';
import { firebaseAuth } from '../../Util/firebase';
import './UserProfile.scss'
function UserProfile() {
    const history = useHistory()
    const context: any = useContext(UserCTX);
    
    function signout(setSignOut: any) {
        firebaseAuth.signOut();
        setSignOut(true);
        context.setUserData({});
        history.push('/login')
    }

    return (
        <section id="user-profile" >
            <UserCTX.Consumer>
                {(value: any) => {
                    if (!value.signout) {
                        const {
                            name,
                            email,
                            phone
                        } = value.userData;

                        return (
                            <div id="user-profile-card">
                                <h1>{name}</h1>
                                <input
                                    type="button"
                                    value="signout"
                                    onClick={() => signout(value.setSignOut)
                                    } />
                            </div>
                        )
                    } else {
                        history.push('/login');
                    }
                }}
            </UserCTX.Consumer>
        </section>
    )
}
export default UserProfile;