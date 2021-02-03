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

    useEffect(() => {
        console.log(data)

    }, [data])

    return (
        <section id="ad-view">
            <div id="ad-card">
                <h1>{postTitle}</h1>
            </div>
        </section>
    )
}
export default AdView;