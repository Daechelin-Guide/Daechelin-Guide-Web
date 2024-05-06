import styled from "styled-components";

export const Wrapper = styled.div`
    margin-left : 19rem;
    padding-top: 3.7vw;
    padding-bottom: 3.7vw;

    display: flex;
    justify-content: center;
    align-items: start;

    /* width: calc(100vw - 19rem); */
    background-color: #F9F9F9;
`

export const ComponentsWrapper = styled.div`
    margin: 0 1.6vw;
    width: 18.3vw;
`

export const TitleComponent = styled.div<{color:string}>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 2.9vw;
    background: #FFFFFF;
    border: 2px solid ${(props)=>(props.color)};
    border-radius: 10px;

    font-weight: 600;
    font-size: 1.1vw;
    color: ${(props)=>(props.color)};
`

export const TitleIcon = styled.img`
    margin-right: 0.3rem;

    width: 2.5vw;
    height: 2.5vw;
`

export const RankingContentWrapper = styled.div<{color:string}>`
    margin-top: 1vw;

    width: 100%;
    height: 6.6vw;

    background: #FFFFFF;
    /* background-color: pink; */
    box-shadow: 0px 0px 5px ${(props)=>(props.color)};
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Circle = styled.div`
    margin-left: 1.2vw;

    width: 0.8vw;
    height: 0.8vw;
    border-radius: 50%;
    background-color: #7B7B7B;
`

export const Crown = styled.img`
    margin-left: 1.2vw;

    width: 1.2vw;
    // height: 1.5rem;
`

export const RankingInfo = styled.div`
    width: 100%;

    padding-top: 1.2vw;
    padding-bottom: 1vw;

    display: flex;
    align-items: center;
`

export const Rank = styled.div<{color:string}>`
    margin-left: 0.6rem;

    font-size: 1vw;
    color: ${(props)=>(props.color)};

`

export const Date = styled.div`
    margin-left: 0.8vw;

    font-family: 'Pretendard';
    font-size: 1vw;
    color: #C1C1C1;
`

export const RankingContent = styled.div`
    // margin-left: 1.5rem;
    width: 85%;

    font-size: 0.8vw;
    color: #424242;

    word-break:keep-all;
`