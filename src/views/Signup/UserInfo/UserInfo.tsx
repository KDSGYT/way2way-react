import { Button, FormGroup, TextField } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { addUserToDB, getImageUrl } from "../../../assets/functions";
import { useGetImageUrl, useUserData, useUserSignedOut } from "../../../assets/Hooks";
import { firebaseAuth } from "../../../Util/firebase";

import './UserInfo.scss';

// User will enter additional information that will be sent to the DB to be accessed later
function UserInfo() {

    const [signout] = useUserSignedOut()
    const history = useHistory();
    const [image, setImage] = useState("");
    const [imageURL, setImageURL] = useState("")
    const [userData, setUserData] = useUserData(); //get data from global userdata state
    const [data, setData] = useState({}) //store data as entered by the user
    const inputFile: any = useRef("")
    const displayName: any = useRef("")
    const phoneNumber: any = useRef("")
    const address: any = useRef("")


    // user will be redirected to signup page if the user did not Entered the information required to create an account
    useEffect(() => {
        // check if the user is signed ou
        if (signout) {
            // history.push('/signup')
        }
    }, [signout]);


    async function handleSubmit() {
        const currentUser: any = firebaseAuth.currentUser
        await getImageUrl(inputFile.current.files[0], currentUser.uid, setImageURL)
    }

    useEffect(() => {
        const newData = {
            ...data,
            photoURL: imageURL
        }
        addUserToDB(newData)
    }, [imageURL])

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
                address: address.current.value
                // photoURL: imageURL
            }
            return newState;
        })
    }

    useEffect(() => {
        console.log(data)
    }, [data])

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