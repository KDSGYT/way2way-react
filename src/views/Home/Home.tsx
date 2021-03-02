import React, { FC, } from 'react';
import { useHistory } from 'react-router-dom';
import AboutSection from '../../Components/AboutSection/AboutSection';
import AccomodationSection from '../../Components/AccomodationSection/AccomodationSection';
import AgencySection from '../../Components/AgencySection/AgencySection';
import Footer from '../../Components/Footer/Footer';
import './Home.scss';

interface props {

}

const Home: FC<props> = () => {

    const history: any = useHistory();
    return (
        <div id="home-page">
            <section id="home">
                <div id="website-name">
                    <h1>WAY2WAY.in</h1>
                </div>
            </section>
            <AgencySection onClick={() => history.push('/agencies')} />
            <AccomodationSection onClick={() => history.push('/accomodation')} />
            <AboutSection onClick={() => history.push('/author')} />
            <Footer />
        </div>
    )
}

export default Home;