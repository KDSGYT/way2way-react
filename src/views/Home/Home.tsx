import { Fade } from '@material-ui/core';
import React, { FC, useEffect, useState, } from 'react';
import AboutSection from '../../Components/AboutSection/AboutSection';
import AccomodationSection from '../../Components/AccomodationSection/AccomodationSection';
import AgencySection from '../../Components/AgencySection/AgencySection';
import './Home.scss';

interface props {

}

const Home: FC<props> = () => {
    const [render, setRender] = useState(false);
    useEffect(() => {
        setRender(true)
        return () => {
            setRender(false)
        };
    }, []);

    return (
        <div id="home-page">
            <section id="home">
                <Fade
                    in={render}
                    timeout={1000}
                >
                    <div id="website-name">
                        <h1>WAY2WAY.in</h1>
                    </div>
                </Fade>
            </section>
            <AgencySection />
            <AccomodationSection />
            <AboutSection />
        </div>
    )
}

export default Home;