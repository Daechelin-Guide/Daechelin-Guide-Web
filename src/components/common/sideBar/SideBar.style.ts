import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

/* export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
    body{
        background-color: #F9F9F9;
        width: 30vw;
    }

    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-style: normal;
}
` */

export const Wrapper = styled.div`
    background-color: #F9F9F9;

    position: fixed;
`

export const Back = styled.div`
    height: 100vh;
    width: 19rem;
    background-color: #FFFFFF;
    box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.05);
`

export const Title = styled.div`
    padding-top: 4rem;
    text-align: center;

    width: 100%;
    height: 16rem;

    font-family: "Black Han Sans", sans-serif;
    font-size: 2rem;
`

export const NavWrapper = styled(Link)`
    text-decoration: none;
`

export const Nav = styled.div`
    width: 100%;
    height: 3rem;
    :active{
        background-color: #F4F4F4;
        >div{
            color: #616161;
        }
    }

    display: flex;
    align-items: center;

    cursor: pointer;
`

export const NavIcon = styled.img`
    margin-left: 4.5rem;

    width: 22px;
    height: 22px;

`

export const NavTitle = styled.div`
    margin-left: 1.5rem;

    font-family: "Pretendard";
    font-weight: 600;
    font-size: 1rem;

    color: #939393;

`