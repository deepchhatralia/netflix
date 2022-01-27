import React, { useState, useEffect } from 'react'
import movieTrailer from 'movie-trailer'
import MyYoutubeContainer from './MyYoutubeContainer'
import axios from '../axios'
import '../css/row.css'

const base_URL = "https://image.tmdb.org/t/p/original"

function Row({ title, url, isPosterLarge }) {
    const [movies, setMovies] = useState([])
    const [youtube, setYoutube] = useState(false)
    const [trailer, setTrailer] = useState('')

    useEffect(() => {
        async function getMovie() {
            axios.get(url)
                .then(val => {
                    setMovies([...val.data.results])
                })
        }
        getMovie()
    }, [url])

    const handleClick = (val) => {
        if (trailer) {
            setYoutube(false)
            setTrailer('')
        } else {
            movieTrailer(val.orignal_name || val.orignal_title || val.name || val.title)
            .then(url => {
                if(url){
                    setYoutube(true)
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailer(urlParams.get('v'))
                }
            })
            .catch(error => console.log(error))
        }
    }

    const opt = {
        playerVars: {
            autoplay: 1
        }
    }

    return (
        <section className="my-row">
            <h4 className="mx-1">{title}</h4>
            <div className="scroll-row d-flex">
                {movies.map((val,index) => {
                    return (
                        <div key={index}>
                            {val.backdrop_path && 
                            <img className="row-images" onClick={() => handleClick(val)} className={`poster-img ${isPosterLarge && "poster-large"}`} src={`${base_URL}${isPosterLarge ? val.poster_path : val.backdrop_path}`} alt={val.title} /> }
                        </div>
                    )
                })}
            </div>
            
            {youtube && <MyYoutubeContainer trailer={trailer} myopt={opt} setYoutube={setYoutube}/>}
        </section>
    )
}

export default Row
