import React from 'react';
import './Stories.scss';
import Story from './Story';
// import { useGetStories } from '../../assets/StoryHooks';

function Stories() {
    // const storyData = useCreateStory(firstName, lastName, image)

    // const [previousStories, setPreviousStories] = useState(null)
    // const storiesData = useGetStories()
    const previousStories = [
        {
            owner: {
                firstName: "Karan",
                lastName: "pal"
            },
            uploadTime: 0 + "hrs",
            expiryTime: 24 + "hrs"
        }

    ]
    // React.useEffect(() => {
    // setPreviousStories(storiesData)
    // })

    const stories = previousStories.map(story => (
        <Story
            firstName={story.owner.firstName}
            lastName={story.owner.lastName}
            // image={story.image}
            uploadTime={story.uploadTime}
            expiryTime={story.expiryTime}
        />
    ))
    return (
        <section id="stories">
            <h3 id="heading">Stories</h3>
            {/* {stories} */}

            <Story
                firstName={"1"}
            />

            <Story
                firstName={"2"}
            />
        </section>
    )
}
export default Stories