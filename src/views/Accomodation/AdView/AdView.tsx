import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AdView.scss'
import { AdsCTX } from '../../../App';

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
    } = data

    const DataCTX = useContext(AdsCTX);
    
    // Run when ad context changes or when the AID is changed
    useEffect(() => {
        setData((prevState: any) => {
            const data: object = DataCTX[AID]
            const newState = {
                ...prevState,
                ...data
            }
            return newState
        })
    }, [DataCTX, AID]);

    return (
        <section id="ad-view" className="display-as-flex">
            <div id="ad-card">
                <h1>{postBathroom}</h1>
            </div>
        </section>
    )
}
export default AdView;