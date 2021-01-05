import React from 'react';
import RightTriangle from './Triangle/RightTriangle';

function AccomodationSection() {
    return (
        <section id="accomodation-area">
            <div className="accomodation">
                <h1>Accomodation</h1>
                <p>Ads posted by desis for desis. Find accomodation starting at $350/month</p>
            </div>
            <span id="left-triangle">
                <RightTriangle />
            </span>
        </section>
    )
}
export default AccomodationSection;