import React from 'react'
import './AgencyItem.scss'
import stampIcon from '../../assets/stamp.svg';
const AgencyItem = ({ data, id }) => {
    const { name, phone, email, address, branch, website, verified } = data
    const stamp = verified ? <img src={stampIcon} className="stamp" alt="verified" title="verified" /> : null;

    return (
        <div className="hoverAnimation agency-item" >
            <li className="id">{id}</li>
            <li className="name">{name} {stamp}</li>
            <li className="phone">
                <a href={`tel:${phone}`}>{phone}</a>
            </li>
            <li className="email">
                <a href={`mailto:${email}`} >{email}</a>
            </li>
            <li className="address">{address}</li>
            <li className="branch">{branch}</li>
            <li className="website"><a href={"https://" + website}>{website}</a></li>
            <br />
        </div>
    )
}

export default AgencyItem;