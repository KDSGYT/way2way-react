import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAdData } from '../../../assets/functions';

function AdView() {
    const { AID }: any = useParams()
    const [data, setData] = useState({});


    useEffect(() => {
        getAdData(AID, setData)
    }, []);

    useEffect(() => {
        console.log(data)
    }, [data])
    
    return (
        <section id="ad-view">
            {AID}
        </section>
    )
}
export default AdView;