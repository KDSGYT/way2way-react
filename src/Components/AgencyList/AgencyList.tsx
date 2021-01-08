import React, { FC } from 'react';
import './AgencyList.scss';
import stampIcon from '../../assets/stamp.svg'
interface props {
    data: any
    id: number
}
const AgencyList: FC<props> = ({ data, id }) => {

    const { address, name, branch, email, phone, verified, website } = data
    const stamp = verified ? <img src={stampIcon} className="stamp" alt="verified" title="verified" /> : null;
    return (
        <tr className="agency-card">
            <td>{id}</td>
            <td className="agency-name">{name}{stamp}</td>
            <td>{address}</td>
            <td> <a href={`tel:${phone}`}>{phone}</a></td>
            <td>{branch}</td>
            <td><a href={`mailto:${email}`} >{email}</a></td>
        </tr>
    )
}
export default AgencyList