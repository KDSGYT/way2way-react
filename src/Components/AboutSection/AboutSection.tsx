import React from 'react';
import './AboutSection.scss';
function AboutSection() {
    return (
        <section id="about-section">
            <div id="section-name">
                <h1 id="about">About</h1>
            </div>
            <div id="about-text">
                <p>This website is for International Students, but not limited to international students looking for work and accomodation</p>

            </div>
            <span id="about-svg">
                <svg width="775" height="255" viewBox="0 0 1275 455" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 450.5L187 5H1268.5L1148 450.5H7Z" fill="black" stroke="url(#paint0_linear)" stroke-width="15" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="637.75" y1="5" x2="637.75" y2="450.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#white" />
                            <stop offset="1" stop-color="#F34646" />
                        </linearGradient>
                    </defs>
                </svg>
            </span>
        </section>
    )
}

export default AboutSection;