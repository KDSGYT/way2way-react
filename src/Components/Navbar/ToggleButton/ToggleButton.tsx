import { useEffect } from 'react';
import { useState } from 'react';
import './ToggleButton.scss';
function ToggleButton() {


    const [toggle, setToggle] = useState("");

    function handleToggle() {
        if (toggle==="") setToggle("toggle")
        else setToggle("")
    }



    useEffect(() => {
        console.log(toggle)
    }, [toggle]);

    return (
        <div id="button-container">
            <button id="toggle-button" className={toggle} onClick={handleToggle}>
                <hr className={"line line1"}></hr>
                <hr className={"line line2 "}></hr>
                <hr className={"line line3"}></hr>
            </button>
        </div>
    )
}
export default ToggleButton;