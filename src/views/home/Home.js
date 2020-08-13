import React from 'react'
import { Fragment } from 'react';
import './Home.scss'
import AgencyItem from '../../components/AgencyItem'

function Home({ list }) {


    const result = list.map((item) => {
        return  <AgencyItem data={item}/>
    })

    return (
        <header>
            <ul>
                {result}
            </ul>
        </header>
    )

}

export default Home;