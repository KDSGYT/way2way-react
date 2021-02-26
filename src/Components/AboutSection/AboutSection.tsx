import {FC} from 'react';
import { SectionProps } from '../../assets/Interface';
import './AboutSection.scss';

const AboutSection:FC<SectionProps> = ({ onClick }) =>  {
    return (
        <section onClick={onClick} id="about-section">
            <div id="section-name">
                <h1 id="about">About</h1>
            </div>
            <div id="sub-section">
                <div id="about-text">
                    <p>This website is for International Students, but not limited to international students looking for work and accomodation</p>

                </div>
            </div>
        </section>
    )
}

export default AboutSection;