import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import fetchData from './requests'
// import Navbar from './components/Navbar'
// import Banner from './components/Banner'
// import Row from './components/Row'

import { Home, SignUp, SignIn, Browse } from './pages'
import useAuthUser from './hooks/useAuthUser'

import { getAuth, onAuthStateChanged } from '@firebase/auth'

import { NormalRoute, ProtectedRoute } from './routes/userStateRoute'

import './style.css'

function Index() {
    const user = useAuthUser()

    return (
        <Router>
            <Switch>
                <NormalRoute exact user={user} loggedInPath='/browse' path='/signin'>
                    <SignIn />
                </NormalRoute>

                <NormalRoute exact user={user} loggedInPath='/browse' path='/signup'>
                    <SignUp />
                </NormalRoute>

                <NormalRoute exact user={user} loggedInPath='/browse' path='/'>
                    <Home />
                </NormalRoute>

                <ProtectedRoute exact user={user} path='/browse'>
                    <Browse />
                </ProtectedRoute>
            </Switch>
        </Router>




        // <div>
        //     {/* navbar */}
        //     <Navbar />
        //     {/* banner */}
        //     <Banner />
        //     {/* rows */}
        //     <Row title="Top Trending" url={fetchData.trending} isPosterLarge />
        //     <Row title="Netflix Orignals" url={fetchData.netflixOrignals} />
        //     <Row title="Top Rated" url={fetchData.topRated} />
        //     <Row title="Action" url={fetchData.actionMovie} />
        //     <Row title="Romance" url={fetchData.romanceMovie} />
        //     <Row title="Comedy" url={fetchData.comedyMovie} />
        //     <Row title="Documentaries" url={fetchData.documentaries} isPosterLarge />
        //     <Row title="Horror" url={fetchData.horrerMovie} />

        // </div>

    )
}

export default Index