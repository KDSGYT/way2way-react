import { FormGroup, TextField } from '@material-ui/core';
import React, { useRef } from 'react';
import { forgotPassword } from '../../assets/functions';
import './ForgotPassword.scss';

function ForgotPassword() {

    const emailAddress: any = useRef()

    async function handleSubmit(e: any) {
        e.preventDefault()
        await forgotPassword(emailAddress.current.value)
    }

    return (
        <section id="forget-password" className="display-as-flex">
            <h2>Forget Password</h2>
            <FormGroup className="display-as-flex" id="password-link-form" >
                <TextField

                    variant='outlined'
                    inputRef={emailAddress}
                    label="Email"
                    type="email"
                />
                <input id="submit-button" type="submit" onClick={handleSubmit}value="Send Link" />
            </FormGroup>

        </section>
    )
}

export default ForgotPassword;