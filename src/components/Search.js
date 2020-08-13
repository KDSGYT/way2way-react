import React, { Fragment } from 'react'

export const Search = ({ setSearchTerm }) => {

    const sectionStyle = {
        // border:"2px solid black",
        width: "100%",
        marginLeft: "-1%"
    }

    const style = {
        border: "none",
        borderBottom: "1px solid white",
        backgroundColor: "transparent",
        width: "40%",
        textAlign: "center",
        outline: "none",
        height: "40px",
        color: "white",
        fontSize: "1.2rem",
        padding: "0 5px",
        margin: "auto 30%",
        // marginLeft:"%",

    }

    return (
        <section style={sectionStyle} >
            <input style={style} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search" />
        </section>
    );
}