import ToggleButton from './ToggleButton/ToggleButton'
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserCTX from '../../CTX/CTX';
import './Navbar.scss';

function Navbar() {


    const style = {
        borderBottom: "1px solid white",
        paddingBottom: "5px"
    }

    const [toggle, setToggle] = useState("");
    const navpageLinks: any = useRef()
    const accountLinks: any = useRef()


    async function handleClick() {
        await setToggle("")
    }

    useEffect(() => {
        if (toggle === "toggle") {
            navpageLinks.current.style.top = "6vh";
            accountLinks.current.style.top = "52vh";
        }
        else {
            navpageLinks.current.style.top = "-39vh";
            accountLinks.current.style.top = "-10vh";
        }
    }, [toggle]);

    return (
        <nav id="navbar" className={`accentstyles`}>
            <ToggleButton
                toggle={toggle}
                setToggle={setToggle}
            />
            <div ref={navpageLinks} id="navpage-links" className="nav-links-group">

                <NavLink
                    activeStyle={style}
                    to="/"
                    exact
                    className="nav-link"
                    onClick={handleClick}

                >
                    HOME
                </NavLink>

                <NavLink
                    activeStyle={style}
                    to="/agencies"
                    className="nav-link"
                    onClick={handleClick}

                >
                    AGENCY
            </NavLink>

                <NavLink
                    activeStyle={style}
                    to="/accomodation"
                    className="nav-link"
                    onClick={handleClick}

                >
                    ACCOMODATION
                </NavLink>

                <NavLink
                    activeStyle={style}
                    to="author"
                    className="nav-link"
                    onClick={handleClick}

                >
                    AUTHOR
                </NavLink>

            </div>

            <div ref={accountLinks} className="nav-links-group" id="account-links">

                {/* will display the username in navbar when the user is logged in */}
                <UserCTX.Consumer>
                    {(value: any) => {
                        if (!value.signOut) {
                            return (<NavLink
                                to="/profile"
                                activeStyle={style}
                                className="nav-link"
                                onClick={handleClick}

                            >
                                {value.userData.displayName}
                            </NavLink>)

                        } else {
                            return (<>
                                <NavLink
                                    to="/login"
                                    activeStyle={style}
                                    className="nav-link"
                                    onClick={handleClick}

                                >
                                    LOGIN
                                </NavLink>
                                <NavLink
                                    to="/signup"
                                    activeStyle={style}
                                    className="nav-link"
                                    onClick={handleClick}

                                >
                                    SIGNUP
                                </NavLink>
                            </>)
                        }
                    }}
                </UserCTX.Consumer>
            </div>
        </nav>
    )
}
export default Navbar;