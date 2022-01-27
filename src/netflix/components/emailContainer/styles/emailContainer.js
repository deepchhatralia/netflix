import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px auto;
    width: 50%;

    @media (max-width:800px){
        width: 90% !important;
    }
`

export const FeatureTitle = styled.h1`
    font-size: 50px;
    font-weight: 700;

    @media (max-width: 800px){
        font-size: 35px;
    }
`

export const FeatureText = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
`

export const Title = styled.h5`
    font-size: 19px;
    margin-bottom: 10px;

    @media (max-width: 800px){
        font-size: 17px;
        font-weight: 500;
    }
`

export const InputContainer = styled.div`
    display: flex;
    width: 60%;

    @media (max-width: 800px){
        flex-direction: column;
        align-items: center;
        width: 90%;
    }
`

export const Input = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 20px;
    outline: none;

    @media (max-width: 800px){
        width: 100%;
    }
`

export const Button = styled.button`
    padding: 1vh 2vw;
    border: none;
    background-color: #F40612;
    color: white;
    font-size: 4vh;
    box-sizing: border-box;
    border-radius: 2px;

    @media (max-width: 800px){
        margin-top: 18px;
    }
`