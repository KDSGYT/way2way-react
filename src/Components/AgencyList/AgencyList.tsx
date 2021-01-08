import React, { FC } from 'react';

interface props {
    data: any
}
const AgencyList: FC<props> = ({ data }) => {
    const {address,name, branch, email,fulltime, parttime, phone, verified, website} = data
    return (
        <div className="agency-card">
            <h3>{name}</h3>
        </div>
    )
}
export default AgencyList