import styled from "styled-components";

export const VotingDetailLayout = styled.div`
    margin-left: 19rem;
    width : calc( 100vw - 19rem);

    padding: 5%;
`

export const VotingBox = styled.div`
    padding: 2%;

    box-shadow: 0px 2px 10px rgb(0,0,0,0.1);
    border-radius: 0.8vw;
`

export const VotingBoxRow = styled.div`
    margin-bottom: 3.6vw;

    width: 62%;

    display: flex;
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
    font-size: 1.3vw;
    letter-spacing: -5%;
`

export const VoteDateText = styled.div`
    font-weight: 300;
    font-size: 1.1vw;
    letter-spacing: -5%;
    color: #4B4B4B;
`

export const VotingStatus = styled.div<{status:string}>`
    margin-left: 0.5vw;

    padding: 0.2vw 0.5vw 0.2vw 0.5vw;

    border-radius: 1.1vw;
    background-color: ${(props)=>props.status === "continue" ? "#6CADF9" : "#818181"};
    color: #FFFFFF;
`

export const Wrapper = styled.div`
    margin-top: 1.4vw;

    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: start;
`

export const ComponentsWrapper = styled.div`
`

export const TitleComponent = styled.div<{color:string}>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 18.8vw;
    height: 2.9vw;
    background: ${(props)=>(props.color)};
    border-radius: 10px;

    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 1.1vw;
    color: #FFFFFF;
`

export const RankingContentWrapper = styled.div<{color:string}>`
    margin-top: 1rem;

    width: 18.8vw;
    height: 6.9vw;

    background: #FFFFFF;
    box-shadow: 0px 0px 5px ${(props)=>(props.color)};
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Circle = styled.div`
    margin-left: 1vw;

    width: 0.8vw;
    height: 0.8vw;
    border-radius: 50%;
    background-color: #7B7B7B;
`

export const Crown = styled.img`
    margin-left: 1vw;

    width: 1vw;
    height: auto;
`

export const RankingInfo = styled.div`
    width: 100%;

    padding-top: 1vw;
    padding-bottom: 0.9vw;

    display: flex;
    align-items: center;
`

export const Rank = styled.div<{color:string}>`
    margin-left: 0.6rem;

    font-family: 'Pretendard';
    font-size: 1.3rem;
    color: ${(props)=>(props.color)};

`

export const Info = styled.div`
    margin-left: 0.8vw;

    font-family: 'Pretendard';
    font-size: 0.9vw;
    color: #C1C1C1;
`

export const RankingContent = styled.div`
    // margin-left: 1.5rem;
    width: 85%;

    font-family: 'Pretendard';
    font-size: 0.8vw;
    color: #424242;

    word-break:keep-all;
`