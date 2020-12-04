import React, { useEffect, useState } from 'react';
import './FullScreenStory.scss';
import gsap from 'gsap';
function FullScreenStory() {

    const [fullScreen, showfullScreen] = useState(false)

    useEffect(() =>{

    }, [fullScreen])


    return (
        <section id="fullscreen-story">
            
        </section>
    )
}
export default FullScreenStory;