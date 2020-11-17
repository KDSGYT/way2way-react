import React, { useState, useEffect } from 'react'
import './Home.scss'
import AgencyItem from '../../components/AgencyItem/AgencyItem'
import { Search } from '../../components/Search'
import Loading from '../../components/Loading/Loading'
function Home({ list, isLoading }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [result, setResult] = useState([]);
    const output = result.map((item, index) => {
        return <AgencyItem data={item} id={index + 1} />
    })

    const regex = new RegExp('(' + searchTerm + ')', "gi")
    const resultOutput = list.filter(item => {
        if (regex.test(item.name)) return true;
        if ((item.verified && regex.test("verified")) || (item.parttime && regex.test("parttime")) || (item.fulltime && regex.test("fulltime"))) return true;
        if ((regex.test(item.branch))) return true;
        return false;
    })

    useEffect(() => {
        setResult(list)
    }, [list])

    useEffect(() => {
        setResult(resultOutput)
    }, [searchTerm])

    
    return (
        <div className="header">
            <ul>
                <li><Search setSearchTerm={setSearchTerm} /></li>
                <div className="agency-item " id="field-name" >
                    <li className="id">ID</li>
                    <li className="name">Name</li>
                    <li className="phone">Phone</li>
                    <li className="email">Email</li>
                    <li className="address">Address</li>
                    <li className="branch">Branch</li>
                    <li className="website">Website</li>
                    <br />
                </div>
                {isLoading ? <Loading />: output}
            </ul>
        </div>
    )

}


export default Home;