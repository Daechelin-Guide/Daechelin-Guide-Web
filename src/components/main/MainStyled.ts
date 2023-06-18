import styled from "styled-components";

export const Wrapper = styled.div`
    margin-left : 19rem;

    display: flex;
    justify-content: center;
    align-items: center;

    width: calc(100vw - 19rem);
    height: 100vh;
    background-color: #F9F9F9;
    
`

export const Arrow = styled.img<{direction : string}>`
    ${(props)=>(props.direction==="left" ? "margin-right : 5rem;" : "margin-left : 5rem;"  )}
    margin-top: 5rem;

    ${(props)=>(props.direction==="left" ? "" : "transform: rotate(180deg);"  )}
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DateDiv = styled.div`
    margin-bottom: 0.3rem;

    width: 20rem;
    height: 3.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Pretendard";
    font-size: 1.5rem;
    font-weight: 500;
    color: #424242;

    background: #FFFFFF;
    border: 1.96667px solid #E6E6E6;
    border-radius: 30px;
`

export const MealComponent = styled.div<{color:string}>`
    margin-top: 2rem;

    display: flex;
    align-items: center;

    width : 60rem;
    height : 15.5rem;

    background: linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;
    box-shadow: 0px 0px 10px ${(props)=>(props.color)};
    border-radius: 20px;
`

export const MealIcon = styled.img`
    margin-left: 2.5rem;
    margin-right: 2.5rem;

    width: 9rem;
    height: 9rem;
`

export const MealInfo = styled.div`
    display: flex;
    align-items: center;
`

export const WhenMeal = styled.div<{color : string}>`
    width: 5.5rem;
    height: 2.5rem;

    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 1.4rem;
    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props)=>(props.color)};
    border-radius: 92px;
`

export const Kcal = styled.div`
    margin-left: 1rem;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;

    color: #C1C1C1;
`

export const MealContent = styled.div`
    margin-top: 1.5rem;

    width: 30rem;
    overflow: visible;

    font-family: 'Pretendard';
    font-size: 1.3rem;
    color: #424242;

`