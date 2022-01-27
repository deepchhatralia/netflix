import React from 'react'
import Profiles from '../components/profiles'
import { Header } from '../components/header'
import netflixLogo from '../components/home/netflixLogo'
import { Link } from 'react-router-dom'

export default function SelectUserProfile({ user, setProfile }) {
    return (
        <>
            <Header>
                <Header.Container>
                    <Header.Logo src={netflixLogo} />
                </Header.Container>
            </Header>

            <Profiles>
                <Profiles.Title>Who's Watching?</Profiles.Title>
                <Profiles.List>
                    {user.photoURL ?
                        <Profiles.User onClick={() => setProfile({ displayName: user.displayName, photoUrl: user.photoURL })}>
                            <Profiles.UserImage src={user.photoURL} />
                            <Profiles.UserName>{user.displayName}</Profiles.UserName>
                        </Profiles.User> :
                        <img src="https://raw.githubusercontent.com/karlhadwen/netflix/master/public/images/misc/loading.gif" />
                    }

                </Profiles.List>
            </Profiles>
        </>
    )
}