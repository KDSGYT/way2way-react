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
                <li id="website"></li>
                <li id="linked-in">LinkedIn</li>
                <li id="github">Github</li>
            </ul>
        </div>
    )
}
export default Profile;