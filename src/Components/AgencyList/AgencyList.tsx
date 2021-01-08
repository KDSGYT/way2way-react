import React, { FC } from 'react';
import './AgencyList.scss';
interface props {
    data: any
    id: number
}
const AgencyList: FC<props> = ({ data, id }) => {
    
    const { address, name, branch, email, phone, verified, website } = data
    
    return (
        <tr className="agency-card">
            <td>{id}</td>
            <td>{name}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{branch}</td>
            <td>{email}</td>
        </tr>
    )
}
export default AgencyList