import React, { useState } from 'react';
import { useCreateStory } from '../../assets/StoryHooks';
import './Stories.scss';
import FullScreenStory from '../FullscreenStory/FullScreenStory'
function Story(props) {

    // use username instead of firstname and lastname it would be much more easier
    const {
        firstName,
        lastname,
        image,
        uploadTime,
        expiryTime

    } = props;

    const [fullScreen, setshowfullScreen] = useState(false)


    return (
        <div className="story">
            <FullScreenStory
                fullScreen={fullScreen}
                setshowfullScreen={setshowfullScreen}
                image={"https://daily.jstor.org/wp-content/uploads/2019/05/the_quantum_random_number_generator_alt2_1050x700.jpg"}
            />
            <div className="story-circle" onClick={() => { setshowfullScreen(!fullScreen); console.log("clicked") }}>
                <img src="https://daily.jstor.org/wp-content/uploads/2019/05/the_quantum_random_number_generator_alt2_1050x700.jpg" />
            </div>
        </div>
    )
}
export default Story;