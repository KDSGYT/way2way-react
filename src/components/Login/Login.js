import React, { useState } from 'react';
import './Login.scss';
import { firebaseAuth, googleProvider } from '../../Util/firebase';
import { checkIfAdmin } from '../../assets/functions';
function Login() {

    const [error, setError] = useState("")

    React.useEffect(() => {
        firebaseAuth.signInWithPopup(googleProvider)
            .then(data => data.user.uid)
            .then (UID =>  checkIfAdmin(UID, setError, error))
            .catch(e => console.error('You need to Login as Admin to get access.', e.message))
    }, [])

    return (
        <>

        </>
    )
}

export default Login;