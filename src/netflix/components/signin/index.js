import React from "react";
import { Container, Title, Input, Button, Text, SmallText, UtilsContainer, UtilsText, Error } from './styles/signin'

export const Signin = ({ children, ...restprops }) => {
    return <Container {...restprops}>{children}</Container>
}

Signin.Title = ({ children, ...restprops }) => {
    return <Title {...restprops}>{children}</Title>
}

Signin.Error = ({ children, ...restprops }) => {
    return <Error {...restprops}>{children}</Error>
}

Signin.Input = ({ children, ...restprops }) => {
    return <Input {...restprops}>{children}</Input>
}

Signin.Button = ({ children, ...restprops }) => {
    return <Button {...restprops}>{children}</Button>
}

Signin.UtilsContainer = ({ children, ...restprops }) => {
    return <UtilsContainer {...restprops}>{children}</UtilsContainer>
}

Signin.UtilsText = ({ children, ...restprops }) => {
    return <UtilsText {...restprops}>{children}</UtilsText>
}

Signin.Text = ({ children, ...restprops }) => {
    return <Text {...restprops}>{children}</Text>
}

Signin.SmallText = ({ children, ...restprops }) => {
    return <SmallText {...restprops}>{children}</SmallText>
}