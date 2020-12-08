import React, { useState, useEffect } from 'react'
import './Home.scss'
import AgencyItem from '../../components/AgencyItem/AgencyItem'
import { Search } from '../../components/Search'
import Loading from '../../components/Loading/Loading'
// import Stories from '../../components/Story/Stories'
function Home({ list, isLoading }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [result, setResult] = useState([]);
    const output = result.map((item, index) => {
        return <AgencyItem key={index} data={item} id={index + 1} />
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
            <ul key="list">
                <li key="search" id="search-input"><Search setSearchTerm={setSearchTerm} /></li>
                {/* <li >
                    <Stories />

                </li> */}
                <div key="agency-item" className="agency-item" id="field-name" >
                    <li key="id" className="id">ID</li>
                    <li key="name" className="name">Name</li>
                    <li key="phone" className="phone">Phone</li>
                    <li key="email" className="email">Email</li>
                    <li key="address" className="address">Address</li>
                    <li key="branch" className="branch">Branch</li>
                    <li key="website" className="website">Website</li>
                    <br />
                </div>
                {isLoading ? <Loading key="loadingConponent" /> : output}
            </ul>
        </div>
    )
}

export default Home;