import React, { Fragment } from 'react'
import './AgencyItem.scss'
const AgencyItem = ({ data }) => {

    const { id, name, phone, email, address, branch, website, parttime, fulltime, verified } = data

    return (
        <div className="agency-item">

            <li>{id}</li>    
            <li>{name}</li>
            <li>{verified}</li>
            <li>{phone}</li>
            <li>{email}</li>
            <li>{address}</li>
            <li>{branch}</li>
            <li><a href={website}>{website}</a></li>
            
            <br/>
        </div>
    )
}

export default AgencyItem;