import { Button, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../../../assets/functions';
import { useUserData } from '../../../assets/Hooks';
import './PostAccAdd.scss'
function PostAccAdd() {

    const [postData, setPostData] = useState({});
    const [furnished, setFurnished] = useState(false)
    const image: any = useRef()
    const [imageUrl, setImageUrl] = useState("");

    const postTitle: any = useRef()
    const postAddress: any = useRef()
    const postDiscription: any = useRef()
    const postRent: any = useRef()
    const postBedroom: any = useRef()
    const [userData] = useUserData()

    async function handleSubmit(e: any) {
        e.preventDefault();
        await getImageUrl(image.current.files[0], userData.uid, setImageUrl);
    }

    useEffect(() => {
        console.table(postData)

    }, [postData]);

    useEffect(() => {
        if (imageUrl !== "") {
            setPostData({
                postTitle: postTitle.current.value,
                postAddress: postAddress.current.value,
                postDiscription: postDiscription.current.value,
                postRent: postRent.current.value,
                postBedroom: postBedroom.current.value,
                postFurnished: furnished,
                postImageUrl: imageUrl
            })
        }
    }, [imageUrl])

    return (
        <section id="post-ad" className="display-as-flex">

            <FormGroup
                id="post-ad-form"
                className="display-as-flex"
            >
                <input
                    id="file-upload"
                    ref={image}
                    accept="image/"
                    multiple
                    type="file"
                />

                <TextField
                    label="Title"
                    variant="outlined"
                    inputRef={postTitle}

                />
                <TextField
                    label="Bedroom"
                    variant="outlined"
                    inputRef={postBedroom}

                />
                <TextField
                    label="Address"
                    variant="outlined"
                    inputRef={postAddress}
                />
                <TextField
                    label="Rent"
                    variant="outlined"
                    type="number"
                    inputRef={postRent}

                />

                <TextField
                    label="Discription"
                    rowsMax={8}
                    variant="outlined"
                    inputRef={postDiscription}
                />
                <FormGroup
                    className="display-as-flex"
                    id="radio-form"
                >
                    <FormLabel component="legend">Furnished</FormLabel>
                    <RadioGroup
                        aria-label="Furnished"
                        name={'Furnished'}
                        value={furnished}
                        id="radio-group"

                    >
                        <FormControlLabel
                            value={true}
                            control={<Radio />}
                            label={'Yes'}
                            onChange={() => setFurnished(true)}
                        />
                        <FormControlLabel
                            value={false}
                            control={<Radio />}
                            label={'No'}
                            onChange={() => setFurnished(false)}

                        />
                    </RadioGroup>
                </FormGroup>
                <Button onClick={handleSubmit} variant="outlined">
                    Submit
                </Button>
            </FormGroup>

        </section>
    )
}
export default PostAccAdd;