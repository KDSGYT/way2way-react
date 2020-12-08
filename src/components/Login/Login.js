import React, { useState } from 'react';
import './Login.scss';
import { firebaseAuth, googleProvider, firestore } from '../../Util/firebase';
import { checkIfAdmin } from '../../assets/functions';
function Login() {

    const [error, setError] = useState("")

    React.useEffect(() => {
        firebaseAuth.signInWithPopup(googleProvider)
            .then(data => data.user.uid)
            .then (UID =>  checkIfAdmin(UID, setError, error))
            .catch(e => console.Error('You need to Login as Admin to get access.'))
        // <Redirect to="/add-data" />
        


    }, [])

    return (
        <>

        </>
    )
}

export default Login;