import React from 'react'
import './AgencyItem.scss'
import stampIcon from '../../assets/stamp.svg';
const AgencyItem = ({ data, id }) => {
    const { name, phone, email, address, branch, website, verified } = data
    const stamp = verified ? <img src={stampIcon} className="stamp" alt="verified" title="verified" /> : null;

    return (
        <div className="hoverAnimation agency-item" >
            <li key="id" className="id">{id}</li>
            <li key="name" className="name">{name} {stamp}</li>
            <li key="phone" className="phone">
                <a href={`tel:${phone}`}>{phone}</a>
            </li>
            <li key="email" className="email">
                <a href={`mailto:${email}`} >{email}</a>
            </li>
            <li key="address" className="address">{address}</li>
            <li key="branch" className="branch">{branch}</li>
            <li key="website" className="website"><a href={"https://" + website}>{website}</a></li>
            <br />
        </div>
    )
}

export default AgencyItem;