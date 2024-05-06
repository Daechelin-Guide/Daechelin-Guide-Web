import styled from "styled-components";

export const VotingMakingLayout = styled.div`
    margin-left: 19rem;
    width : calc( 100vw - 19rem);
    padding: 5%;
`

export const VotingBox = styled.div`
    padding: 2%;

    box-shadow: 0px 2px 10px rgb(0,0,0,0.1);
    border-radius: 0.8vw;
`

export const VoteRow = styled.div`
    display: flex;
    align-items: center;
`

export const VoteDateIcon = styled.img`
    margin-right: 0.2vw;

    width: 1.7vw;
    height: auto;
`

export const VoteDateTitle = styled.div`
    font-size: 1.3vw;
    letter-spacing: -5%;
`

export const DateInputWrapper = styled.div`
    margin: 0.7vw 0 1.4vw 0;

    width: 38%;

    color: #787878;
    font-size: 1.1vw;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DateInput = styled.input`
    width: 12.8vw;
    height: 2vw;
    border-radius: 0.6vw;

    background-color: #F6F6F6;
    border: solid 1px #B0B0B0;

    padding: 0.4vw 1.4vw;

    font-size: 0.9vw;
`

export const PostBtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`

export const PostBtn = styled.button`
    margin-bottom: 1.3vw;
    padding: 0.8vw 4.8vw;

    outline: none;
    background: none;

    border: solid 3px #9B9B9B;
    border-radius: 1.2vw;

    color: #9B9B9B;
    font-size: 1.1vw;
    font-weight: 500;
    letter-spacing: -5%;
`