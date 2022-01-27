import React, { useState, useEffect } from 'react'
import Loading from '../components/loading';
import netflixLogo from '../components/home/netflixLogo';
import { Header } from '../components/header'

export default function BrowseContainer({ user }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    return (
        <>
            {loading ? <Loading src={user.photoURL} /> :

                <Header className="myClass" style={{ minHeight: "660px", height: "100%" }}>
                    <Header.Container>
                        <Header.Logo src={netflixLogo} />
                    </Header.Container>
                </Header>
            }
        </>
    )
}