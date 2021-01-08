import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {

    const style = {
        borderBottom: "1px solid white",
        paddingBottom: "5px"
    }

    return (
        <nav id="navbar" className={"accentstyles"}>
            <div id="navpage-links" className="nav-links-group">
                <NavLink
                    activeStyle={style}
                    to="/"
                    exact
                    className="nav-link"
                >
                    HOME
                </NavLink>
                <NavLink
                    activeStyle={style}
                    to="/agencies"
                    className="nav-link"
                >
                    AGENCY
            </NavLink>
                <NavLink
                    activeStyle={style}
                    to="/accomodation"
                    className="nav-link"
                >
                    ACCOMODATION
                </NavLink>
                <NavLink
                    activeStyle={style}
                    to="author"
                    className="nav-link"
                >
                    AUTHOR
                </NavLink>
            </div>

            <div className="nav-links-group" id="account-links">
                <NavLink
                    to="/login"
                    activeStyle={style}
                    className="nav-link"
                >
                    LOGIN
                </NavLink>
                <NavLink
                    to="/signup"
                    activeStyle={style}
                    className="nav-link"
                >
                    SIGNUP
                </NavLink>
            </div>
        </nav>
    )
}
export default Navbar;