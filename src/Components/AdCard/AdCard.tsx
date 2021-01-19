import React, { FC } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Image from '../../assets/img/accomodation-section-background.jpg'
import AdView from '../../views/AdView/AdView';
import './AdCard.scss';

interface props {
    address: string
    bedroom: number
    furnished: boolean
    washroom: number
    rent: number
    AID: string
}

const AdCard: FC<props> = ({ bedroom, address, washroom, furnished, rent, AID }) => {

    const history = useHistory();

    function handleClick(e:any) {
        e.preventDefault();
        history.push(`/accomodation/${AID}`);
    }

    return (
        <div className="id-card">
            <div className="upper-section">
                <img src={Image} alt="" />

            </div>
            <div className="lower-section">
                <p className="address">{address}</p>
                {/* Discription for the accomodation */}
                <div className="discription">

                    <div className="upper">
                        {/* number of bedrooms */}
                        <div className="bedroom">
                            <div className="amount">
                                <h4>{bedroom}</h4>
                            </div>
                            <div className="amount-for">
                                <p>Bedroom</p>
                            </div>
                        </div>

                        {/* Washrooms */}
                        <div className="washroom">
                            <div className="amount">
                                <h4>{washroom}</h4>
                            </div>
                            <div className="amount-for">
                                <p>Washrooms</p>
                            </div>
                        </div>
                    </div>

                    <div className="lower">
                        {/* Is the place furnished */}
                        <div className="furnished">
                            <div className="amount">
                                <h4>{furnished ? "Yes" : "No"}</h4>
                            </div>
                            <div className="amount-for">
                                <p>Furnished</p>
                            </div>
                        </div>

                        {/* Rent for the place */}
                        <div className="rent">
                            <div className="amount">
                                <h4>${rent}</h4>
                            </div>
                            <div className="amount-for">
                                <p>Rent</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="view-button" onClick={handleClick}>
                    View Ad
                </button>
            </div>
        </div>


    )
}

export default AdCard;