import { Button, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { createPost, getImageUrl } from '../../../assets/functions';
import { useUserData } from '../../../assets/Hooks';
import UploadImages from '../../../Components/UploadImages/UploadImages';
import { firebaseAuth } from '../../../Util/firebase';
import './PostAccAdd.scss'
function PostAccAdd() {

    const [postData, setPostData] = useState({});
    const [furnished, setFurnished] = useState(false);
    const image: any = useRef();
    const [imageUrl, setImageUrl] = useState("");
    const current:any = firebaseAuth.currentUser;
    const postTitle: any = useRef();
    const postAddress: any = useRef();
    const postDiscription: any = useRef();
    const postRent: any = useRef();
    const postBedroom: any = useRef();
    const postWashroom: any = useRef();
    const [userData] = useUserData();

    async function handleSubmit(e: any) {
        e.preventDefault();
        await getImageUrl(image.current.files[0], userData.uid, setImageUrl);
    }

    useEffect(() => {
        console.table(postData)
        if (postTitle.current.value !== "") {
            createPost(postData)

        }
        /**
         * logic to set the number of post posted by the user to one so that the user
         * is not able to post any more ads on the website.
         */
    }, [postData]);

    useEffect(() => {
        if (imageUrl !== "") {
            setPostData({
                postOwnerData: {
                    displayName: userData.displayName,
                    UID: current.uid,
                    email: current.email,
                    phone: userData.phoneNumber
                },
                postTitle: postTitle.current.value,
                postAddress: postAddress.current.value,
                postDiscription: postDiscription.current.value,
                postRent: postRent.current.value,
                postBedroom: postBedroom.current.value,
                postFurnished: furnished,
                postImageUrl: imageUrl,
                posted: new Date(),
                postBathroom: postWashroom.current.value
            })
        }
    }, [imageUrl,
        furnished,
        userData,
        current
    ])


    // function handleNumberChange(e: any) {
    //     // check if the user has entered the letter e 
    //     // Do not register the keystroke if the user enters 
    // }

    return (
        <section id="post-ad" className="display-as-flex">

            <FormGroup
                id="post-ad-form"
                className="display-as-flex"
            >

                <UploadImages
                    inputRef={image}
                />


                {/* Post title */}
                <TextField
                    label="Title"
                    variant="outlined"
                    inputRef={postTitle}
                    required
                    className={"input-field"}
                />

                <span className={" display-as-flex grouped-input-field"}>
                    {/* Number of bedrooos */}
                    <TextField
                        label="Bedroom"
                        variant="outlined"
                        inputRef={postBedroom}
                        required
                        type="number"
                        // onChange={handleNumberChange}
                        className={"input-field"}

                    />

                    {/* Number of washrooms */}
                    <TextField
                        label="Washroom"
                        type="number"
                        // onChange={handleNumberChange}
                        variant="outlined"
                        inputRef={postWashroom}
                        required
                        className={"input-field"}

                    />
                </span>

                {/* Location Address */}
                <TextField
                    label="Address"
                    variant="outlined"
                    inputRef={postAddress}
                    required
                    className={"input-field"}

                />

                {/* Rent for the place */}
                <TextField
                    label="Rent"
                    variant="outlined"
                    type="number"
                    // onChange={handleNumberChange}
                    inputRef={postRent}
                    required
                    className={"input-field"}

                />

                {/* Discription if any */}
                <TextField
                    label="Discription"
                    rowsMax={8}
                    variant="outlined"
                    inputRef={postDiscription}
                    className={"input-field"}

                />

                {/* If the place furnished */}
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

                {/* Submit the form */}
                <Button id="ad-submit-button" onClick={handleSubmit} variant="outlined">
                    Submit
                </Button>
            </FormGroup>

        </section>
    )
}
export default PostAccAdd;