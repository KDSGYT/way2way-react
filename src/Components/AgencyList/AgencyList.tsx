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
            <td className="id" key="id">{id}</td>
            <td key="name" className="agency-name name">{name}{stamp}</td>
            <td className="address" key="addres">{address}</td>
            <td className="phone" key="phone"> <a href={`tel:${phone}`}>{phone}</a></td>
            <td className="branch" key="branch">{branch}</td>
            <td className="email" key="email"><a href={`mailto:${email}`} >{email}</a></td>
        </tr>
    )
}
export default AgencyList