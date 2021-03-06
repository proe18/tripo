import styled from 'styled-components'
import { ButtonLinkStyled as Button } from '../button/ButtonStyled'

export const NotFoundPage = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100vw;
    min-height: 100vh;
    position: relative;
    background-color: #ffff;
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    z-index: 999;
`

export const Container = styled.div`
    text-align: center;
    position: absolute;
    font-family: 'Roboto', sans-serif;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 640px) {
        width: 100%;
        height: 50%;
        margin: 0 auto;
    }

    @media (max-height: 420px) {
        width: 100%;
    }

    ${Button} {
        max-width: 200px;
        margin-top: 40px;
        border-radius: 5px;
        background-color: ${({theme}) => theme.color.thirdColor};

        &:hover {
            color: ${({theme}) => theme.color.whiteColor};
            background-color: ${({theme}) => theme.color.primaryColor};
        }

        @media (max-width: 860px) {
            max-width: 150px;
            font-size: 1.4rem;
        }

        @media (max-height: 420px) {
            max-width: 150px;
            font-size: 1.4rem;
        }
    }

    p:first-child {
        font-size: 20rem;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;

        @media (max-width: 860px) {
            font-size: 10rem;
        }

        @media (min-height: 321px) and (max-height: 420px) {
            font-size: 10rem;
        }

        @media (min-height: 281px) and (max-height: 320px) {
            font-size: 8rem;
        }

        @media (max-height: 280px) {
            font-size: 6rem;
        }
    }

    h1 {
        font-size: 3rem;
        font-weight: 500;
        margin-bottom: 20px;

        @media (max-width: 860px) {
            font-size: 2.1rem;
        }

        @media (max-height: 420px) {
            font-size: 2.1rem;
        }
    }

    p:nth-last-child(2) {
        font-size: 2rem;
        font-weight: 400;
        color: #2e2e2ec9;

        @media (max-width: 860px) {
            font-size: 1.6rem;
        }

        @media (max-height: 420px) {
            font-size: 1.6rem;
        }
        
        @media (max-height: 280px) {
            font-size: 1.4rem;
        }
    }
`