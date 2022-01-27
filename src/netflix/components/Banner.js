import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../css/banner.css'

const bannerUrl = "https://api.themoviedb.org/3/discover/movie?api_key=67fa31cca59e9d01e89827ba875b387f&page="

const base_URL = "https://image.tmdb.org/t/p/original"

function Banner() {
    const pageNum = Math.floor(Math.random() * 490 - 1)
    const [banners, setBanners] = useState([])

    const bannerStyle = {
        backgroundImage: `url("${base_URL+banners.backdrop_path}")`
    }

    useEffect(() => {
        async function fetchBanner() {
            const x = await axios.get(bannerUrl + pageNum)
            const img = x.data.results[Math.floor(Math.random() * x.data.results.length - 1)]
            setBanners(img.backdrop_path ? img : fetchBanner())
        }
        fetchBanner()
    },[])

    return (
        <>
        <div className="banner" style={bannerStyle}>
            <div className="banner-info">
                <h3>{banners.title}</h3>
                <div className="btn-class">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p>{banners.overview}</p>
            </div>
        </div>
        </>
    )
}

export default Banner