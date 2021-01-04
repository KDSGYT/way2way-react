import React, { FC } from 'react';
import './Home.scss';

interface props {

}

const Home: FC<props> = () => {
    return (
        <section id="home">
            <div id="website-name">
                <h1>Way2Way.in</h1>
            </div>
        </section>
    )
}

export default Home;