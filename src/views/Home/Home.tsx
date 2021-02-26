import { Fade } from '@material-ui/core';
import React, { FC, useEffect, useState, } from 'react';
import { useHistory } from 'react-router-dom';
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

    const history: any = useHistory();
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
            <AgencySection onClick={() => history.push('/agencies')} />
            <AccomodationSection onClick={() => history.push('/accomodation')} />
            <AboutSection onClick={() => history.push('/author')} />
        </div>
    )
}

export default Home;