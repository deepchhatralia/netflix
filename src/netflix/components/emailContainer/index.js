import React from 'react'
import { Container, Title, InputContainer, Input, Button, FeatureTitle, FeatureText } from './styles/emailContainer'

export const EmailContainer = ({ children, ...restprops }) => {
    return <Container {...restprops}>{children}</Container>
}

EmailContainer.FeatureTitle = ({ children, ...restprops }) => {
    return <FeatureTitle {...restprops}>{children}</FeatureTitle>
}

EmailContainer.FeatureText = ({ children, ...restprops }) => {
    return <FeatureText {...restprops}>{children}</FeatureText>
}

EmailContainer.Title = ({ children, ...restprops }) => {
    return <Title {...restprops}>{children}</Title>
}

EmailContainer.InputContainer = ({ children, ...restprops }) => {
    return <InputContainer {...restprops}>{children}</InputContainer>
}

EmailContainer.Input = ({ children, ...restprops }) => {
    return <Input {...restprops}>{children}</Input>
}

EmailContainer.Button = ({ children, ...restprops }) => {
    return <Button {...restprops}>{children}</Button>
}