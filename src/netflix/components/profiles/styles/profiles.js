import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    max-width: 80%;
`

export const Title = styled.h2`
    width: 100%;
    color: #fff;
    font-size: 30px;
    text-align: center;
    font-weight: 500;
`

export const List = styled.div`
    padding: 0;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
`

export const User = styled.div`
    max-height: 200px;
    max-width: 200px;
    list-style-type: none;
    text-align: center;
    margin-right: 30px;
    &:last-of-type {
        margin-right: 0;
    }
`

export const UserImage = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    border: 3px solid black;
    cursor: pointer;
`

export const UserName = styled.p`
    color: #808080;
    text-overflow: ellipsis;
    font-size: 16px;
    &:hover {
        font-weight: bold;
        color: #e5e5e5;
    }
`