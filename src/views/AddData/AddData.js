import { Checkbox, TextField, FormControlLabel } from '@material-ui/core';
import React, { useRef } from 'react';
import { firestore } from '../../Util/firebase';
import './AddData.scss';

export default function AddData() {

    const name = useRef(null);
    const phone = useRef(null)
    const email = useRef(null)
    const address = useRef(null)
    const branch = useRef(null)
    const fulltime = useRef(null)
    const parttime = useRef(null)
    const website = useRef(null)
    const verified = useRef(null)

    /**
     * Creates a entry in the database
     * @param { node } e - the node that triggered the event
     */
    const handleSubmit = async (e) => {

        e.preventDefault();
        const data = {
            name: name.current.value,
            phone: phone.current.value,
            email: email.current.value,
            address: address.current.value,
            branch: branch.current.value,
            website: website.current.value,
            parttime: parttime.current.checked,
            fulltime: fulltime.current.checked,
            verified: verified.current.checked
        }
        firestore.collection('agencies').doc().set(data)
            .then((res) => console.log("worked"))
            .catch((e) => console.error("did"))
    }

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
        </section>
    )
}