import styled from "styled-components";

export const Wrapper = styled.div`
    margin-left : 19rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: calc(100vw - 19rem);
    height: 100vh;
    background-color: #F9F9F9;
`

export const ComponentWrapper = styled.div`
    margin-top: 2rem;
`

export const Label = styled.div`

    text-align: start;
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 1.5rem;
    color: #424242;
`

export const ContentWrapper = styled.div`
    margin-top: 1rem;

    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    padding-left: 2rem;
    padding-right: 1rem;

    display: flex;
    justify-content: space-between;

    width: 50rem;
    height: fit-content;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 1.3rem;
    color: #424242;
`

export const ContentComplexWrapper = styled.div`
    margin-top: 1rem;

    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    padding-left: 2rem;
    padding-right: 1rem;

    display: flex;
    justify-content: end;

    width: 50rem;
    height: fit-content;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 1.3rem;
    color: #424242;
    
`

export const Arrow = styled.img<{direction : string}>`
    width : 1.5rem;
    height: 1.5rem;
    transform : ${(props)=>(props.direction === "left" ? "rotate(180deg)" : 
        (props.direction === "up" ? "rotate(90deg)" : "rotate(270deg)")
    )};
`

export const Content = styled.div`
    margin-right: 1rem;

    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 1.3rem;
    color: #AAAAAA;

    flex: 1;
    text-align: end;

`