import React from 'react'

export const Search = ({ setSearchTerm }) => {

    const sectionStyle = {
        // border:"2px solid black",
        width: "100%",
        marginLeft: "-1%"
    }

    const style = {
        border: "none",
        borderRadius: "0px",
        borderBottom: "1px solid white",
        backgroundColor: "transparent",
        width: "40%",
        textAlign: "center",
        outline: "none",
        height: "40px",
        color: "white",
        fontSize: "1rem",
        padding: "0 5px",
        margin: "auto 30%",
        // marginLeft:"%",

    }

    return (
        <section style={sectionStyle} >
            <input 
                style={style} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                type="text" 
                placeholder={"Try \" Verified \" "} 
            />
        </section>
    );
}