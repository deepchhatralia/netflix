import React from "react";
import { Container, Title, List, User, UserImage, UserName } from "./styles/profiles";

export default function Profiles({ children, ...restprops }) {
    return <Container {...restprops}>{children}</Container>
}

Profiles.Title = ({ children, ...restprops }) => {
    return <Title {...restprops}>{children}</Title>
}

Profiles.List = ({ children, ...restprops }) => {
    return <List {...restprops}>{children}</List>
}

Profiles.User = ({ children, ...restprops }) => {
    return <User {...restprops}>{children}</User>
}

Profiles.UserImage = ({ children, ...restprops }) => {
    return <UserImage {...restprops}>{children}</UserImage>
}

Profiles.UserName = ({ children, ...restprops }) => {
    return <UserName {...restprops}>{children}</UserName>
}