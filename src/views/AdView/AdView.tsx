import React from 'react';
import { useParams } from 'react-router-dom';

function AdView() {
    const {AID}:any = useParams()


    return (
        <section id="ad-view">
            {AID}
        </section>
    )
}
export default AdView;