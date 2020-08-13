import React, { useState, useEffect } from 'react'
import './Home.scss'
import AgencyItem from '../../components/AgencyItem'
import { Search } from '../../components/Search'

function Home({ list }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [result, setResult] = useState([]);    
    const output = result.map((item) => {
        return  <AgencyItem data={item}/>
    })

    const regex = new RegExp('('+ searchTerm + ')', "gi")
    const resultOutput = list.filter( item =>{
        if(regex.test(item.name)){
            return true;
        }
        return false;
    })

    useEffect(()=>{
        setResult(list)
    }, [list])

    useEffect(()=>{
        setResult(resultOutput)
    },[searchTerm])



    return (
        <header>
            <ul>
                <li><Search setSearchTerm={setSearchTerm}/></li>
                {output}
            </ul>
        </header>
    )

}

export default Home;