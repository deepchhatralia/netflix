import React, { useState, useEffect } from 'react'
import '../css/navbar.css'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (window.scrollY > 100) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <nav className={`${scrolled && "scrolled"}`}>
            <img src="data:image/png;base64,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" alt="NETFLIX" />

            <i className="fas fa-user"></i>
        </nav>
    )
}

export default Navbar
