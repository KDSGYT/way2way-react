import React, { Suspense } from 'react';
import { getData, sortDataAlphabetically } from '../../assets/functions';
import './Agency.scss';
const AgencyList = React.lazy(() => import('../../Components/AgencyList/AgencyList'));

function Agency() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        getData(setData);
    }, [])

    const list = sortDataAlphabetically(data).map((item: any, index: number) => <AgencyList id={index + 1} key={index} data={item} />)

    return (
        <section id="agencies">
            <div id="container">
                <table id="agency-list">
                    <thead>
                        <tr id="header">
                            <th className="id">ID</th>
                            <th className="name">NAME</th>
                            <th className="address">ADDRESS</th>
                            <th className="phone">PHONE</th>
                            <th className="branch">BRANCH</th>
                            <th className="email">E-MAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Suspense fallback={<tr><td><h1>Loading</h1></td></tr>}>
                            {list}
                        </Suspense>
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Agency;