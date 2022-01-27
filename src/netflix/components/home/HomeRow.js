import React from 'react'

function HomeRow({ myStyle, title, desc, img }) {
    const customStyle = {
        flexDirection: `${myStyle}`
    }
    return (
        <>
            <div style={customStyle} className="home-row">
                <div className="first">
                    <h1 className="my-2">{title}</h1>
                    <p>{desc}</p>
                </div>
                <div className="second">
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    )
}

export default HomeRow
