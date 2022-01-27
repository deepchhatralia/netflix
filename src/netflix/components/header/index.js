import React from 'react'
import { Headerr, Container, Logo, Button } from './styles/header'
import './styles/header.css'

export const Header = ({ children, ...restprops }) => {
    return <Headerr {...restprops}>{children}</Headerr>
}

Header.Container = ({ children, ...restprops }) => {
    return <Container {...restprops}>{children}</Container>
}

Header.Logo = ({ ...restprops }) => {
    return <Logo {...restprops} />
}

Header.Button = ({ children, ...restprops }) => {
    return <Button {...restprops}>{children}</Button>
}