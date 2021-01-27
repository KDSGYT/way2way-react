import React, { FC, useState } from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import './UploadImages.scss';
interface props {
    inputRef?: any
}

const UploadImages: FC<props> = ({ inputRef }) => {

    const [images, setImages] = useState([]);
    const preview: any = images.map((image: any, index) => {
        return (
            <img className="image-preview" alt="" src={URL.createObjectURL(image)} key={index} />
        )
    })
    const [maxLimitReached, setMaxLimitReached] = useState(false)
    const limitReached = maxLimitReached ? <h3>Max Limit Reached: 5 images</h3> : null
    function handleChange() {
        // console.log(inputRef.current.files[0])
        setImages((prevState): any => {
            return [
                ...prevState,
                inputRef.current.files[0]
            ]
        })
    }

    React.useEffect(() => {
        if (images.length > 3) {
            setMaxLimitReached(true);
        }
    }, [images])


    return (
        <>
            <div id="preview">
                {preview}
            </div>
            {limitReached}
            <CloudUploadIcon
                id="upload-icon"
                onClick={() => inputRef.current.click()}
            />
            {/* this part of the component is hidden.
                    this is just used to get details for
                */}
            <input
                id="file-upload"
                ref={inputRef}
                accept="image/"
                multiple
                type="file"
                required
                className={"input-field"}
                onChange={handleChange}
                disabled={maxLimitReached}

            />
            {/* Hidden until this line */}
        </>
    )
}

export default UploadImages;