import styled from "styled-components";
import { ReactComponent as ArrowIcon} from "../../asset/Arrow.svg"

export const Wrapper = styled.div`
    margin-left : 19rem;

    display: flex;
    justify-content: center;
    align-items: center;

    width: calc(100vw - 19rem);
    height: 100vh;
    background-color: #F9F9F9;
`

export const Arrow = styled(ArrowIcon)<{direction : string}>`
    width: 2.4vw;

    ${(props)=>(props.direction==="left" ? "margin-right : 4.1vw;" : "margin-left : 4.1vw;"  )}
    margin-top: 4.1vw;

    ${(props)=>(props.direction==="left" ? "" : "transform: rotate(180deg);"  )}
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DateDiv = styled.div`
    margin-bottom: 0.3rem;

    width: 16.6vw;
    height: 2.9vw;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Pretendard";
    font-size: 1.2vw;
    font-weight: 500;
    color: #424242;

    background: #FFFFFF;
    border: 1.96667px solid #E6E6E6;
    border-radius: 1.5vw;
`

export const MealComponent = styled.div<{color:string}>`
    margin-top: 2rem;

    display: flex;
    justify-content: start;
    align-items: center;

    width : 50vw;
    height : 12.9vw;

    background: linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;
    box-shadow: 0px 0px 10px ${(props)=>(props.color)};
    border-radius: 1vw;
`

export const MealIcon = styled.img`
    margin-left: 2vw;
    margin-right: 2vw;

    width: 7.5vw;
    height: 7.5vw;
`

export const MealRightBox = styled.div`
`

export const MealInfo = styled.div`
    display: flex;
    align-items: center;
`

export const WhenMeal = styled.div<{color : string}>`
    width: 4.5vw;
    height: 2vw;

    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 1.1vw;
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
    font-weight: 600;
    font-size: 1.1vw;
    line-height: 1.3vw;

    color: #C1C1C1;
`

export const MealContent = styled.div`
    margin-top: 1.2vw;
    padding-right: 2vw;

    overflow: visible;
    word-break: keep-all;

    font-family: 'Pretendard';
    font-size: 1vw;
    color: #424242;
`