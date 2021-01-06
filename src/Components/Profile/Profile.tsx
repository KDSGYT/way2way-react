import React from 'react';
import './Profile.scss';

function Profile() {

    return(
        <div id="profile">
            <div id="profile-image">
                <img src={"../../assets/img/dp.png"} alt="" />
            </div>
            <h1>Karan Pal Singh</h1>
            <ul id="social-media-links">
                <li>KDSG.Live</li>
                <li>LinkedIn</li>
                <li>Github</li>
            </ul>
        </div>
    )
}
export default Profile;