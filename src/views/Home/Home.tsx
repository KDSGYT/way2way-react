import React, { FC } from 'react';
import AboutSection from '../../Components/AboutSection/AboutSection';
import AccomodationSection from '../../Components/AccomodationSection/AccomodationSection';
import AgencySection from '../../Components/AgencySection/AgencySection';
import './Home.scss';

interface props {

}

const Home: FC<props> = () => {
    return (
        <>
            <section id="home">
                <div id="website-name">
                    <h1>Way2Way.in</h1>
                </div>
            </section>
            <AgencySection />
            <AccomodationSection />
            <AboutSection />
        </>
    )
}

export default Home;