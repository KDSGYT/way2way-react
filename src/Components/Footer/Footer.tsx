import { FC } from "react";
import './Footer.scss';
import AuthorProfileImage from "../AuthorProfileImage/AuthorProfileImage";
import DP from '../../assets/img/dp.png';
import { useHistory } from "react-router-dom";

/**
 * Content
 * 
 * Author Information (Social media, email)
 * Navigation Links as the navbar is not sticky
 * Copyright may b 
 * Our mission
 * Keywords for SEO
 * Donation
 */


interface props {

}

const Footer: FC<props> = () => {

    const history = useHistory();

    return (
        <footer id="footer" className="display-as-flex">

            {/* Our Company Goal */}
            <ul id="our-mission">
                <li><h3>Our Mission</h3></li>
                <li><p>Our company's purpose is to provide any kind of help in Job search and Accomodation for immigrants. Our service is completely free of cost plus no ads.</p></li>
            </ul>

            {/* Author Section */}
            <ul id="author" className="display-as-flex">
                <ul >
                    <li><h3>Author</h3></li>
                    <li className="display-as-flex">

                        <AuthorProfileImage
                            image={DP}
                            className={"footer-author-dp"}
                        />
                    </li>
                </ul>
                <ul>
                    <li><h4>Karan Pal Singh</h4></li>
                    <li><a href="http://kdsg.live" ><u>KDSG.LIVE</u> </a></li>
                </ul>

            </ul>

            {/* Navigation links */}
            <ul>
                <li><h3>Navigation Links</h3></li>
                <li className="link" onClick={() => history.push('/')}>Home</li>
                <li className="link" onClick={() => history.push('/agencies')}>Agency</li>
                <li className="link" onClick={() => history.push('/accomodation')}>Accomodation</li>
                <li className="link" onClick={() => history.push('/author')}>Author</li>
                <li className="link" onClick={() => history.push('/login')}>Login</li>
            </ul>

            {/* Contact US */}
            <ul>
                <li><h3>Contact Us</h3></li>
                <li><b>Phone: </b><a className="link" href="tel:+16474824097" >647.482.4097</a></li>
                <li><b>Email: </b><a className="link" href="mailto:kdsgyt@gmail.com">KDSGYT@gmail.com</a></li>
            </ul>

        </footer>
    )
}

export default Footer;