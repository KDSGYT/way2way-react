import React, { Suspense } from 'react';
import { getData, sortDataAlphabetically } from '../../assets/functions';
import './Agency.scss';
const AgencyList = React.lazy(() => import('../../Components/AgencyList/AgencyList'));

function Agency() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        getData(setData);
    }, [])
    React.useEffect(() => {
        console.log(data)
    }, [data])
    const list = sortDataAlphabetically(data).map((item: any, index: number) => <AgencyList id={index + 1} data={item} />)
    return (
        <section id="agencies">
            <div id="container">
                <table id="agency-list">
                    <tr id="header">
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                        <th>PHONE</th>
                        <th>BRANCH</th>
                        <th>E-MAIL</th>
                    </tr>
                    <Suspense fallback={<h1>Loading</h1>}>
                        {list}
                    </Suspense>
                </table>
            </div>
        </section>
    )
}
export default Agency;