import React, { useEffect, useState } from 'react';
import { getAds } from '../../assets/functions';
import AdCard from '../../Components/AdCard/AdCard';
import './Accomodation.scss';

function Accomodation() {

    const [ads, setAds] = useState([]);

    useEffect(() => {
        getAds(setAds);

    }, []);

    React.useEffect(() => {

        console.log(ads)
    }, [ads]);
    const data: any = ads.map((post: any, index: number) => {
        if (post.postTitle) {
            return (
                <AdCard
                    key={index}
                    address={post.postAddress}
                    bedroom={post.postBedroom}
                    furnished={post.postFurnished}
                    washroom={post.postWashroom}
                    rent={post.postRent}
                    AID={'something'}
                    imageUrl={post.postImageUrl}
                />
            )
        }
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