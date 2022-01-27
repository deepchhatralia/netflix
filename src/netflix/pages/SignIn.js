import React, { useState } from 'react'
import { Header } from '../components/header'
import { Signin } from '../components/signin'
import Footer from '../components/footer/Footer'
import netflixLogo from '../components/home/netflixLogo'
import { Link, useHistory, Redirect } from 'react-router-dom'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'


function SignIn() {
    const [error, setError] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [userPassword, setuserPassword] = useState('')

    const isValid = userPassword === '' || emailAddress === ''

    const auth = getAuth()

    const history = useHistory()

    const handleClick = () => {

        signInWithEmailAndPassword(auth, emailAddress, userPassword)
            .then(val => {
                setError('')
                history.push("/browse")
            })
            .catch(error => setError(error.message))
    }

    return (
        <Header className="myClass">
            <Header.Container>
                <Header.Logo src={netflixLogo} />
                <Link to="/signup">
                    <Header.Button>Sign Up</Header.Button>
                </Link>
            </Header.Container>
            <Signin>
                <Signin.Title>Sign In</Signin.Title>
                {error && <Signin.Error>{error}</Signin.Error>}
                <Signin.Input
                    placeholder="Email or Phone Number"
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
                    disabled={isValid}
                    onClick={handleClick}>
                    Sign In
                </Signin.Button>
                <Signin.UtilsContainer>
                    <Signin.UtilsText><input type="checkbox" /> Remember me</Signin.UtilsText>
                    <Signin.UtilsText>Need Help?</Signin.UtilsText>
                </Signin.UtilsContainer>
                <Signin.Text>New to Netflix?&nbsp;
                    <Link to="/signup" style={{ fontSize: "16px", color: "white" }}>Sign up Now.</Link>
                </Signin.Text>
                <Signin.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a></Signin.SmallText>
            </Signin>
            <Footer style={{ backgroundColor: "rgba(0,0,0,0.7)", marginTop: "100px" }} />
        </Header >
    )
}

export default SignIn
