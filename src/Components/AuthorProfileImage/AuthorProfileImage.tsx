import { FC } from 'react';
import './AuthorProfileImage.scss';

interface props {
    image: string //src to the file that needs to be displayed
    className?: string //class to style the component
    id?: string //id to style the component
}

const AuthorProfileImage: FC<props> = ({ image, className, id }) => {
    return (
        <div className={`profile-image ${className} `} id={id}>
            <img src={image} alt="" />
        </div>
    )
}
export default AuthorProfileImage;
