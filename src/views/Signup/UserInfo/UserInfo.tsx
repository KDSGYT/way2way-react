import { Button, FormGroup, TextField } from "@material-ui/core";
import { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { addUserToDB, getImageUrl } from "../../../assets/functions";
import { useUserData, useUserSignedOut } from "../../../assets/Hooks";
import UserCTX from "../../../CTX/CTX";
import { firebaseAuth } from "../../../Util/firebase";

import './UserInfo.scss';

// User will enter additional information that will be sent to the DB to be accessed later
function UserInfo() {

    const [signout] = useUserSignedOut()
    const history = useHistory();
    const [image, setImage] = useState("");
    const [imageURL, setImageURL] = useState("")
    // const [, setUserData] = useUserData(); //get data from global userdata state
    const [data, setData] = useState({}) //store data as entered by the user
    const inputFile: any = useRef("")
    const displayName: any = useRef("")
    const phoneNumber: any = useRef("")
    const address: any = useRef("")
    const context:any = useContext(UserCTX)
    

    // user will be redirected to signup page if the user did not Entered the information required to create an account
    useEffect(() => {
        // console.log(userData)
        // check if the user is signed out
        if (signout) {
            history.push('/signup')
        }
    }, [signout, history]);


    /**
     * Triggered by the after handleSubmit is executed and changes the imageURL state
     */
    useEffect(() => {
        console.log('urlChanged')
        /** execute only when then user is logged in and imageURL is present */
        if (context.creatingAccount && imageURL) {
            const currentUser: any = firebaseAuth.currentUser
            const newData = {
                ...data,
                UID: currentUser.uid,
                photoURL: imageURL
            }
            addUserToDB(newData, context.setUserData)
            context.setCreatingAccount(false)
            context.setSignup(false)
            history.push('/profile')
        }
    }, [imageURL, data])

    /**
     * gets the current user and get the image url on submit,
     * then change the imageURL state which triggers handle useEffect
     */
    async function handleSubmit() {
        const currentUser: any = firebaseAuth.currentUser
        await getImageUrl(inputFile.current.files[0], currentUser.uid, setImageURL)
    }

    const handleChange = () => {
        if (inputFile.current.files[0]) {
            const imageLocation = window.URL.createObjectURL(inputFile.current.files[0])
            setImage(imageLocation)
        }
        setData(prevState => {
            const newState = {
                ...prevState,
                displayName: displayName.current.value,
                phoneNumber: phoneNumber.current.value,
                address: address.current.value,
                postedAds: 0
            }
            return newState;
        })
    }


    return (
        <section id="user-info">
            <FormGroup id="user-info-form" className={"display-as-flex"}>
                <h1>Required information</h1>
                <img src={image} alt="" id="user-profile-image" onClick={() => inputFile.current.click()} />
                <input
                    ref={inputFile}
                    id="user-profile-holder"
                    type="file"
                    accept="image"
                    onChange={handleChange}
                    multiple
                />
                <TextField
                    inputRef={displayName}
                    label="Full Name"
                    variant="outlined"
                    className={"user-info-input"}
                    required
                    onChange={handleChange}
                />
                <TextField
                    inputRef={phoneNumber}
                    label="Phone"
                    type="number"

                    variant="outlined"
                    className={"user-info-input"}
                    required
                    onChange={handleChange}
                />
                <TextField
                    inputRef={address}
                    label="Address"
                    variant="outlined"
                    className={"user-info-input"}
                    required
                    onChange={handleChange}
                />
                <Button
                    // type="submit"
                    variant="outlined"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>

            </FormGroup>
        </section>
    )
}

export default UserInfo;