import styled from 'styled-components/macro'

export const Headerr = styled.div`
    display: flex;
    flex-direction: column;
    background: url(./${props => props.bg.src}.jpg) top left / cover no-repeat;

    @media(max-width: 800px){
        background-image: none;
    }
`

Headerr.defaultProps = {
    bg: { src: "home-bg" }
}

export const Container = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;

    @media (max-width: 800px){
        padding: 0 10px
    }
`

export const Logo = styled.img`
    width: 150px;
    height: 100%;
`

export const Button = styled.button`
    background-color: #E50914;
    color: white;
    font-size: 15px;
    font-weight: 700;
    padding: 5px 15px;
    border: none;
    border-radius: 4px;
`