import React from 'react'
import YouTube from 'react-youtube'

function MyYoutubeContainer({ trailer, myopt, setYoutube}) {
    const handleClick = ()=>{
        setYoutube(false)
    }

    return (
        <div onClick={handleClick} className="youtube-container">
            <YouTube videoId={trailer} opts={myopt} className="youtube-iframe"/>
        </div>
    )
}

export default MyYoutubeContainer