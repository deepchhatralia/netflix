import React, { useState, useContext } from 'react'
import { Header } from '../components/header'
import { Signin } from '../components/signin'
import Footer from '../components/footer/Footer'
import netflixLogo from '../components/home/netflixLogo'
import { Link, useHistory } from 'react-router-dom'

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

function SignUp() {
    const history = useHistory()
    const [error, setError] = useState('')
    const [firstName, setFirstName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [userPassword, setuserPassword] = useState('')

    const isValid = firstName === '' || emailAddress === '' || userPassword === ''

    const handleClick = () => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, emailAddress, userPassword)
            .then(val => {
                setError('')
                updateProfile(auth.currentUser, { displayName: firstName, photoURL: `https://raw.githubusercontent.com/karlhadwen/netflix/master/public/images/users/${Math.floor(Math.random() * 5) + 1}.png` })
                    .then(() => history.push('/browse'))
            })
            .catch(error => {
                setFirstName('')
                setEmailAddress('')
                setuserPassword('')
                setError(error.message)
            })
    }
    return (
        <Header className="myClass">
            <Header.Container>
                <Header.Logo src={netflixLogo} />
                <Link to="/signin">
                    <Header.Button>Sign In</Header.Button>
                </Link>
            </Header.Container>
            <Signin>
                <Signin.Title>Sign Up</Signin.Title>
                {error && <Signin.Error>{error}</Signin.Error>}
                <Signin.Input
                    placeholder="First name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Signin.Input
                    placeholder="Email Address"
                    type="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                />
                <Signin.Input
                    placeholder="Password"
                    type="password"
                    value={userPassword}
                    onChange={(e) => setuserPassword(e.target.value)}
                />
                <Signin.Button
                    onClick={handleClick}
                    disabled={isValid}>
                    Sign Up
                </Signin.Button>
                <Signin.Text>Already a User?&nbsp;
                    <Link to="/signin" style={{ fontSize: "16px", color: "white" }}>Sign in Now.</Link>
                </Signin.Text>
                <Signin.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a></Signin.SmallText>
            </Signin>
            <Footer style={{ backgroundColor: "rgba(0,0,0,0.7)", marginTop: "100px" }} />
        </Header >
    )
}

export default SignUp
