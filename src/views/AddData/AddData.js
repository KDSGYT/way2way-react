import { Checkbox, TextField, FormControlLabel } from '@material-ui/core';
import React, { useRef, useEffect, useState } from 'react';
import { firestore } from '../../Util/firebase';
import './AddData.scss';
import firebase from '../../Util/firebase';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variation="filled" {...props} />;
}

export default function AddData() {

    const name = useRef(null);
    const phone = useRef(null);
    const email = useRef(null);
    const address = useRef(null);
    const branch = useRef(null);
    const fulltime = useRef(null);
    const parttime = useRef(null);
    const website = useRef(null);
    const verified = useRef(null);
    // const [error, setError] = useState("");
    const [admin, setadmin] = useState(false);

    useEffect(() => {
        // if(!admin){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firestore.collection('user').doc('admin').get()
                    .then((response) => setadmin(response.data().UID === user.uid))
                    .catch((e) => console.error(e))
            } else {
                // User is signed out
                window.location = "/#/login";
            }
        });
        // }
    }, [])

    useEffect(() => {
        // if (!admin) window.location = "/login"

    }, [admin])

    /**
     * Creates a entry in the database
     * @param { node } e - the node that triggered the event
     */
    const handleSubmit = async (e) => {

        e.preventDefault();
        const data = {
            name: name.current.value,
            phone: phone.current.value,
            email: email.current.value || "-",
            address: address.current.value,
            branch: branch.current.value,
            website: website.current.value || "-",
            parttime: parttime.current.checked,
            fulltime: fulltime.current.checked,
            verified: verified.current.checked
        }
        firestore.collection('agencies').doc().set(data)
            .then((res) => {
                console.log("worked");
                setOpen(true);
                return ;

            })
            .catch((e) => console.error("did"));
    }

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        setOpen(false);
    };

    return (
        <section id="add-data">
            <h1 id="heading">Creating A New Entry</h1>
            <form id="submission-form" autoComplete="off" onSubmit={handleSubmit} >
                <TextField inputRef={name} id="agency-name" required label="Agency Name" />
                <TextField inputRef={phone} id="phone" required label="Phone" />
                <TextField inputRef={email} id="email" label="Email" />
                <TextField inputRef={address} id="address" required label="Address" />
                <TextField inputRef={branch} id="branch" required label="Branch" />
                <TextField inputRef={website} id="website" label="Website" />
                <FormControlLabel
                    control={
                        <Checkbox
                            inputRef={parttime}
                            label="Part-time"
                            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                    }
                    label="Part-Time"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            inputRef={fulltime}
                            label="Full-time"
                            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                    }
                    label="Full-Time"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            inputRef={verified}
                            label="Verified"
                            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                    }
                    label="Verified"
                />
                <input type="submit" />
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Entry Created!
                </Alert>
            </Snackbar>
        </section>
    )
}