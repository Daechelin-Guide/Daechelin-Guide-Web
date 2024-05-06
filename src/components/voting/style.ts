import styled from "styled-components";

export const VotingLayout = styled.div`
    margin: 2.6vw 0 2.6vw 19rem ;
    width : calc( 100vw - 19rem);

    padding: 0 5% 0 5%;
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

export const VotingBox = styled.div`
    margin: 1vw 0;

    padding: 2%;

    width: 100%;
    height: 10vw;

    box-shadow: 0px 2px 10px rgb(0,0,0,0.1);
    border-radius: 0.8vw;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const VoteDateBox = styled.div`
    position: relative;
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
    font-size: 1.2vw;
    letter-spacing: -5%;
`

export const VoteDateText = styled.div`
    font-weight: 300;
    font-size: 1vw;
    letter-spacing: -5%;
    color: #4B4B4B;
`

export const VotingStatus = styled.div<{status:string}>`
    margin-left: 0.5vw;

    padding: 0.2vw 0.5vw 0.2vw 0.5vw;

    border-radius: 1.1vw;
    background-color: ${(props)=>props.status === "continue" ? "#6CADF9" : "#818181"};
    color: #FFFFFF;
    font-size: 0.7vw;
`

export const DetailBtn = styled.button`
    z-index: 1;
    position: absolute;
    right: 8%;

    font-size: 1.1vw;
    color: #BABABA;
    letter-spacing: -5%;

    background: none;
    outline: inherit;
    border: inherit;

    cursor: pointer;
`