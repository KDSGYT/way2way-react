import React from 'react';
import { useCreateStory } from '../../assets/StoryHooks';
import './Stories.scss';

function Story(props) {

    // use username instead of firstname and lastname it would be much more easier
    const {
        firstName,
        lastname,
        image,
        uploadTime,
        expiryTime

    } = props;

    return (
        <div className="story">
            <div className="story-circle">
                <img src="https://daily.jstor.org/wp-content/uploads/2019/05/the_quantum_random_number_generator_alt2_1050x700.jpg" />
            </div>
        </div>
    )
}
export default Story;