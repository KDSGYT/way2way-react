import React from 'react';
import Triangle from './Triangle/Triangle';

function AgencySection() {
    return (
        <section id="agency-area">
            <div className="text">
                <h1>Agencies</h1>
                <p>A list of all employment agencies that can help you to survive in Canada as a newcommer</p>
            </div>
            <span id="right-triangle">

                <Triangle />
            </span>
        </section>
    )
}
export default AgencySection;