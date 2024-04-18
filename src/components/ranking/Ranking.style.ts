import styled from "styled-components";

export const Wrapper = styled.div`
    margin-left : 19rem;
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;

    display: flex;
    justify-content: center;
    align-items: start;

    /* width: calc(100vw - 19rem); */
    background-color: #F9F9F9;
`

export const ComponentsWrapper = styled.div`
    margin: 0 2rem;
`

export const TitleComponent = styled.div<{color:string}>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 22rem;
    height: 3.5rem;
    background: #FFFFFF;
    border: 2px solid ${(props)=>(props.color)};
    border-radius: 10px;

    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 1.4rem;
    color: ${(props)=>(props.color)};
`

export const TitleIcon = styled.img`
    margin-right: 0.3rem;

    width: 3rem;
    height: 3rem;
`

export const RankingContentWrapper = styled.div<{color:string}>`
    margin-top: 1rem;

    width: 22rem;
    height: 8rem;

    background: #FFFFFF;
    /* background-color: pink; */
    box-shadow: 0px 0px 5px ${(props)=>(props.color)};
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Circle = styled.div`
    margin-left: 1.5rem;

    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #7B7B7B;
`

export const Crown = styled.img`
    margin-left: 1.5rem;

    width: 1.5rem;
    // height: 1.5rem;
`

export const RankingInfo = styled.div`
    width: 100%;

    padding-top: 1.5rem;
    padding-bottom: 1.2rem;

    display: flex;
    align-items: center;
`

export const Rank = styled.div<{color:string}>`
    margin-left: 0.6rem;

    font-family: 'Pretendard';
    font-size: 1.3rem;
    color: ${(props)=>(props.color)};

`

export const Date = styled.div`
    margin-left: 1rem;

    font-family: 'Pretendard';
    font-size: 1.2rem;
    color: #C1C1C1;
`

export const RankingContent = styled.div`
    // margin-left: 1.5rem;
    width: 20rem;

    font-family: 'Pretendard';
    font-size: 1rem;
    color: #424242;

    word-break:keep-all;
`