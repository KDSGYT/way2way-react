import { FC } from 'react';
import { SectionProps } from '../../assets/Interface';
import './Accomodation.scss';

const AccomodationSection:FC<SectionProps> = ({onClick}) => {
    return (
        <section id="accomodation-area">
            <div onClick={onClick} className="text">
                <h1>Accomodation</h1>
                <p>Ads posted by desis for desis. Find accomodation starting at $350/month</p>
            </div>
            
        </section>
    )
}
export default AccomodationSection;