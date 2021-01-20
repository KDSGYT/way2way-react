import { FormGroup, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import './PostAccAdd.scss'
function PostAccAdd() {

    const [postData, setpostData] = useState({});

    return (
        <section id="post-ad" className="display-as-flex">

            <FormGroup
                id="post-ad-form"
                className="display-as-flex"
            >
                <input 
                    accept="image/"
                    multiple
                    type="file"
                />

                <TextField
                    label="Title"
                    variant="outlined"
                />
                <TextField
                    label="address"
                    variant="outlined"

                />

            </FormGroup>

        </section>
    )
}
export default PostAccAdd;