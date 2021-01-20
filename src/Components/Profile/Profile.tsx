import React from 'react';
import './Profile.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Instagram } from '@material-ui/icons';

function Profile() {

    return (
        <div id="profile">
            <div id="profile-image">
                <img src={"../../assets/img/dp.png"} alt="" />
            </div>
            <h1>Karan Pal Singh</h1>
            <ul id="social-media-links">
                <li id="linked-in"><a target="_blank" rel="noreferrer" href="https://linkedin.com/in/KDSGYT" ><LinkedInIcon fontSize="large" /></a></li>
                <li id="github"><a target="_blank" rel="noreferrer" href="https://github.com/KDSGYT" ><GitHubIcon fontSize="large" /></a></li>
                <li id="twitter"><a target="_blank" rel="noreferrer" href="https://twitter.com/KDSGYT" ><TwitterIcon fontSize="large" /></a></li>
                <li id="instagram"><a target="_blank" rel="noreferrer" href="https://instagram.com/KDSGYT" ><Instagram fontSize="large" /></a></li>
            </ul>
        </div>
    )
}
export default Profile;