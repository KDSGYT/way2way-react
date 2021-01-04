import React from 'react';
import './Navbar.scss';

function Navbar() {
    return (
        <nav id="navbar" className={"accentstyles"}>
            <div id="navpage-links" className="nav-links-group">
                <li className="nav-link">HOME</li>
                <li className="nav-link">AGENCY</li>
                <li className="nav-link">ACCOMODATION</li>
                <li className="nav-link">AUTHOR</li>
            </div>
            <div className="nav-links-group" id="account-links">
                <li className="nav-link">LOGIN</li>
                <li className="nav-link">SIGNUP</li>
            </div>
        </nav>
    )
}
export default Navbar;