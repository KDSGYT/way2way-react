import React, { FC } from 'react';
import './AgencyList.scss';
import stampIcon from '../../assets/stamp.svg'
interface props {
    data: any
    id: number
}
const AgencyList: FC<props> = ({ data, id }) => {

    const { address, name, branch, email, phone, verified } = data
    const stamp = verified ? <img src={stampIcon} className="stamp" alt="verified" title="verified" /> : null;
    return (
        <tr key={name} className="agency-card">
            <td key="id">{id}</td>
            <td key="name" className="agency-name">{name}{stamp}</td>
            <td key="addres">{address}</td>
            <td key="phone"> <a href={`tel:${phone}`}>{phone}</a></td>
            <td key="branch">{branch}</td>
            <td key="email"><a href={`mailto:${email}`} >{email}</a></td>
        </tr>
    )
}
export default AgencyList