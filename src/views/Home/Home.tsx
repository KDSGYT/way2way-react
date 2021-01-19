import React, { FC, } from 'react';
import AboutSection from '../../Components/AboutSection/AboutSection';
import AccomodationSection from '../../Components/AccomodationSection/AccomodationSection';
import AgencySection from '../../Components/AgencySection/AgencySection';
import './Home.scss';

interface props {

}

const Home: FC<props> = () => {

    function homeProfileCallback(
        id: any, // the "id" prop of the Profiler tree that has just committed
        phase: any, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration: any, // time spent rendering the committed update
        baseDuration: any, // estimated time to render the entire subtree without memoization
        startTime: any, // when React began rendering this update
        commitTime: any, // when React committed this update
        interactions: any // the Set of interactions belonging to this update  
    ) {
        const data = {
            id, // the "id" prop of the Profiler tree that has just committed
            phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
            actualDuration, // time spent rendering the committed update
            baseDuration, // estimated time to render the entire subtree without memoization
            startTime, // when React began rendering this update
            commitTime, // when React committed this update
            interactions // the Set of interactions belonging to this update
        }
        console.table(data)
    }

    return (
        <div id="home-page">
            <section id="home">
                <div id="website-name">
                    <h1>WAY2WAY.in</h1>
                </div>
            </section>
            <AgencySection />
            <AccomodationSection />
            <AboutSection />
        </div>
    )
}

export default Home;