import React, { Suspense } from 'react';
import { getData } from '../../assets/functions';
const AgencyList = React.lazy(() => import('../../Components/AgencyList/AgencyList'));

function Agency() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        getData(setData);
    }, [])
    React.useEffect(() => {
        console.log(data)
    }, [data])
    const list = data.map((item: any) => <AgencyList data={item} />)
    return (
        <section id="agencies">
            <Suspense fallback={<h1>Loading</h1>}>
                {list}
            </Suspense>
        </section>
    )
}
export default Agency;