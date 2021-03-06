import { useContext, useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import './AdView.scss'
import { AdsCTX } from '../../../App';
import Button from '@material-ui/core/Button';

function AdView() {
    // placeholder data in case if there is delay in data then it placeholder will take place
    const placeholderData = {
        postAddress: "",
        postBathroom: "",
        postBedroom: "",
        postDiscription: "",
        postFurnished: false,
        postImageUrl: "",
        postOwnerUID: "",
        postRent: "",
        postTitle: "",
        postOwnerData: {}

    }
    // get the AID or ad id from the parameter
    const { AID }: any = useParams()

    const [data, setData]: any = useState(placeholderData);
    const {
        postTitle,
        postAddress,
        postBathroom,
        postBedroom,
        postDiscription,
        postFurnished,
        postImageUrl,
        postRent,
        postOwnerData
    } = data

    const DataCTX = useContext(AdsCTX);

    // Run when ad context changes or when the AID is changed
    useEffect(() => {
        setData((prevState: any) => {
            const data: object = DataCTX[AID]
            console.log(data)
            const newState = {
                ...prevState,
                ...data
            }
            return newState
        })
    }, [DataCTX, AID]);

    return (
        <section id="view" className="display-as-flex">
            <div id="ad-data" className="display-as-flex">
                {/* images posted by the user */}
                <div id="images" className="display-as-flex" >
                    <img src={postImageUrl} alt="" onClick={() => window.open(postImageUrl)}/>

                </div>

                {/* This part includes all the information of the post */}
                <div id="post-body" className="display-as-flex">

                    <h1>{postTitle}</h1>
                    {/* Other Information about post */}
                    <div className={" post-info display-as-flex "}>
                        <span className="data" id="address">{postAddress} </span>
                        <span className="data"> Rent: ${postRent}/month</span>
                    </div>
                    <div className={" post-info display-as-flex "}>
                        <span className="data">Furnished: {postFurnished ? "Yes" : "No"}</span>
                        <span className="data"> Washrooms: {postBathroom}</span>
                        <span className="data">Bedrooms: {postBedroom}</span>
                    </div>
                    <h3 className="post-info" id="discription">
                        Discription: {' '} {/**add empty s */}
                        <span
                            className="data"
                        >
                            {postDiscription}
                        </span>
                    </h3>

                    {/* This part inclueds all contact information */}
                    <div id="owner-contact-details" className="display-as-flex">
                        <Button
                            variant="contained"

                        >
                            <a href={`mailto:${postOwnerData.email}`} >Email</a>
                        </Button>

                        <Button
                            variant="contained"
                        >
                            <a href={`tel:+${postOwnerData.phone}`} >   Call</a>
                        </Button>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default AdView;