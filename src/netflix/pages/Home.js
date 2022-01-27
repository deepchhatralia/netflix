import React from 'react'
import { Link } from 'react-router-dom'

import netflixLogo from '../components/home/netflixLogo'

import { Header } from '../components/header'
import { EmailContainer } from '../components/emailContainer'
import Footer from '../components/footer/Footer'

import HomeRow from '../components/home/HomeRow'
import homeRowData from '../components/home/HomeRowData'

import FaqRow from '../components/faq/FaqRow'
import faqs from '../components/faq/faqs'

import '../components/home/home.css'

import '../components/header/styles/header.css'

function Home() {
    return (
        <>
            <Header className="myClass" style={{ minHeight: "660px", height: "100%" }}>
                <Header.Container>
                    <Header.Logo src={netflixLogo} />
                    <Link to="/signin">
                        <Header.Button>Sign In</Header.Button>
                    </Link>
                </Header.Container>
                <EmailContainer style={{ margin: "auto" }}>
                    <EmailContainer.FeatureTitle>
                        Unlimited movies, TV shows and more.
                    </EmailContainer.FeatureTitle>
                    <EmailContainer.FeatureText>
                        Watch anywhere. Cancel anytime.
                    </EmailContainer.FeatureText>
                    <EmailContainer.Title>Ready to watch? Enter your email to create or restart your membership.</EmailContainer.Title>
                    <EmailContainer.InputContainer style={{ width: "100%" }}>
                        <EmailContainer.Input type="email" placeholder="Email Address" />
                        <EmailContainer.Button>Get  Started</EmailContainer.Button>
                    </EmailContainer.InputContainer >
                </EmailContainer >
            </Header >

            <div className="break"></div>

            <div className="container">
                {homeRowData.map(val => {
                    return (
                        <HomeRow myStyle={val.rowStyle} title={val.title} desc={val.desc} img={val.img} />
                    )
                })}
            </div>

            <div className="break"></div>

            <div className="container pb-4">
                <div className="faq-container">
                    <h1 className="text-center my-5">Frequently Asked Questions</h1>
                    {faqs.map(val => {
                        return (
                            <FaqRow title={val.que} desc={val.ans} />
                        )
                    })}
                </div>
            </div>
            <EmailContainer style={{ width: "80%" }}>
                <EmailContainer.Title>Ready to watch? Enter your email to create or restart your membership.</EmailContainer.Title>

                <EmailContainer.InputContainer>
                    <EmailContainer.Input type="email" placeholder="Email Address" />
                    <EmailContainer.Button>Get Started</EmailContainer.Button>
                </EmailContainer.InputContainer>
            </EmailContainer>

            <div className="break my-5"></div>

            <Footer />
        </>
    )
}

export default Home;