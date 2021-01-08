import React, { useRef } from 'react';
import { TextField } from '@material-ui/core';
import './Signup.scss';
import { createUser } from '../../assets/functions';

function Signup() {
    const name:any = useRef("")
    const phone:any = useRef("")
    const password: any = useRef("")
    const email: any = useRef()

    function handleClick() {
        // console.log(email.current.value)
        const data = {
            name:name.current.value,
            email:email.current.value,
            phone:phone.current.value
        }
        createUser(data, password.current.value)
    }

    return (
        <section id="sign-up">
            <form onSubmit={(e) => e.preventDefault()} id="sign-up-card">
                <TextField inputRef={name} required id="f-name" label="Name" variant="filled" />
                <TextField inputRef={password} required id="password" type="password" label="Password" variant="filled" />
                <TextField inputRef={phone} required id="phone" label="Phone " type="tel" variant="filled" />
                <TextField inputRef={email} required id="email" label="E-Mail " type="email" variant="filled" />
                <input type="submit" onClick={handleClick} id="signup" value="SignUp" />
            </form>
        </section>
    )
}
export default Signup; 