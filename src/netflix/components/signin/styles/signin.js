import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 430px;
    margin: auto;
    margin-top: 20px;
    background-color: rgba(0,0,0,0.7);
    padding: 50px 60px 70px;
    border-radius: 8px;

    @media(max-width: 800px){
        width: 100%;
        height: 100%;
        border-radius: 0px;
        background-color: black;
        padding: 20px 12px 0;
    }
`

export const Title = styled.h3`
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 700;
`

export const Error = styled.div`
    width: 100%;
    background-color: orange;
    color: white;
    padding: 5px 15px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 400;
    margin: 10px 0;
`

export const Input = styled.input`
    margin: 0 0 15px 0;
    padding: 10px 20px;
    color: white;
    background-color: #333333;
    border: none;
    border-radius: 5px;
    outline: none;

    &:last-of-type{
        margin-bottom: 35px;
    }
`

export const Button = styled.button`
    background-color: #E50914;
    color: white;
    font-weight: 700;
    border: none;
    padding: 11px 25px;
    border-radius: 5px;
`

export const UtilsContainer = styled.div`
    display: flex;
    align-itemss: center;
    justify-content: space-between;
    margin: 5px 0;
`

export const UtilsText = styled.small`
    font-size: 14px;
    color: gray;
`

export const Text = styled.p`
    color: gray;
    font-size: 16px;
    margin: 25px 0 10px;
`

export const SmallText = styled.p`
    font-size: 12px;
    color: gray;
    line-height: 15px;
`