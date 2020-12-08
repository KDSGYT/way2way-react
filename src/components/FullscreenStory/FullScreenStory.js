import React, { useEffect } from 'react';
import './FullScreenStory.scss';
import gsap from 'gsap';

function FullScreenStory({ fullScreen, setshowfullScreen, image }) {

    const goFullScreenAnimation = gsap.fromTo("#fullscreen-story", {
        opacity: 0,
        zoom: "0",
        zIndex: -1
    }, {
        opacity: 1,
        zoom: "100%",
        paused: true,
        duration: 0.5,
        zIndex: 10
    })
    useEffect(() => {
        if (fullScreen === true) goFullScreenAnimation.play();
        setTimeout(() => (setshowfullScreen(false)), 7000)
        return (() => (goFullScreenAnimation.reverse()))
    }, [fullScreen, goFullScreenAnimation,setshowfullScreen])


    return (
        <section id="fullscreen-story">
            <div id="image-container" >
                <img src={image} alt="Some story" />
            </div>
        </section>
    )
}
export default FullScreenStory;