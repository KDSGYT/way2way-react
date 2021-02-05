import React, { useContext, useEffect } from 'react';
import { AdsCTX } from '../../App';
import AdCard from '../../Components/AdCard/AdCard';
import './Accomodation.scss';

function Accomodation() {

    const ads = useContext(AdsCTX);
    useEffect(() => {

    }, []);

    React.useEffect(() => {
        console.log(ads)
    }, [ads]);

    const data: any = ads.map((post: any, index: number) => {

        if (post.postTitle) {
            return (
                <AdCard
                    key={index}
                    title={post.postTitle}
                    address={post.postAddress}
                    bedroom={post.postBedroom}
                    furnished={post.postFurnished}
                    washroom={post.postBathroom}
                    rent={post.postRent}
                    AID={index}
                    imageUrl={post.postImageUrl}
                />
            )
        }
        return null;
    })
    return (
        <section id="accomodation">
            <div id="container">
                {data}
            </div>
        </section>
    )
}
export default Accomodation;