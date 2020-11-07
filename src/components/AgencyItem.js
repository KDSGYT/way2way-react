import React from 'react'
import './AgencyItem.scss'
import stampIcon from '../assets/stamp.svg';
const AgencyItem = ({ data, id }) => {

    const { name, phone, email, address, branch, website, verified } = data
    const stamp = verified ? <img src={stampIcon} className="stamp" alt="verified" title="verified" /> : null;
    return (
        <div className="agency-item">
            <li>{id}</li>
            <li>{name} {stamp}</li>
            <li>{phone}</li>
            <li>{email}</li>
            <li>{address}</li>
            <li>{branch}</li>
            <li><a href={"https://" + website}>{website}</a></li>
            <br />
        </div>
    )
}

export default AgencyItem;