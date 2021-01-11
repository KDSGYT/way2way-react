import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import UserCTX from '../../CTX/CTX';
import { firebaseAuth } from '../../Util/firebase';

function UserProfile() {
    const history = useHistory()

    function signout(setSignOut: any) {
        firebaseAuth.signOut();
        setSignOut(true);
        history.push('/login')
    }

    return (
        <UserCTX.Consumer>
            {(value: any) => {
                if (!value.signout) {
                    const { name, email, phone } = value.userData;
                    return (
                        <>
                            <h1>{name}</h1>
                            <input type="button" value="signout" onClick={() => signout(value.setSignOut)} />
                        </>
                    )
                } else {
                    history.push('/login');
                }
            }}
        </UserCTX.Consumer>
    )
}
export default UserProfile;