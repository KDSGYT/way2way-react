import { FC } from 'react';
import { SectionProps } from '../../assets/Interface';
import './AgencySection.scss';

const AgencySection:FC<SectionProps> = ({onClick}) =>  {
    
    return (
        <section id="agency-area">
            <div onClick={onClick} className="text">
                <h1>Agencies</h1>
                <p>Online Directory of employment agencies that can help you to survive in Canada as a newcommer</p>
            </div>
            <div id="right-triangle">
            </div>
        </section>
    )
}

export default AgencySection;