import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../asset/Arrow.svg"

interface ArrowPropsType {
    direction : string,
    color? : string
}

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
    margin-top: 1.6vw;
`

export const Label = styled.div`
    text-align: start;
    font-weight: 600;
    font-size: 1.2vw;
    color: #424242;
`

export const ContentWrapper = styled.div<{color?:string}>`
    margin-top: 0.8vw;

    padding-top: 1vw;
    padding-bottom: 1vw;
    padding-left: 1.6vw;
    padding-right: 0.8vw;

    display: flex;
    justify-content: space-between;

    width: 50vw;
    height: fit-content;
    background: #FFFFFF;
    box-shadow: ${(props)=>props.color !== "red" && "0px 0px 10px rgba(0, 0, 0, 0.05)"};
    border-radius: 8px ;
    ${(props)=>props.color === "red" && "border : solid 2px #FF8C8C;"}

    font-weight: 500;
    font-size: 1.1vw;

    color: ${(props)=>props.color === "red" ? "#FF8C8C" : "#424242"};
`

export const ContentComplexWrapper = styled.div`
    margin-top: 0.8vw;

    padding-top: 1vw;
    padding-bottom: 1vw;
    padding-left: 1.6vw;
    padding-right: 0.8vw;

    display: flex;
    justify-content: end;

    width: 50vw;
    height: fit-content;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    font-weight: 500;
    font-size: 1.1vw;
    color: #424242;
    
`

export const Arrow = styled(ArrowIcon)<ArrowPropsType>`
    width : 1.2vw;
    height: 1.2vw;
    transform : ${(props)=>(props.direction === "left" ? "rotate(180deg)" : 
        (props.direction === "up" ? "rotate(90deg)" : "rotate(270deg)")
    )};
    & path{
        ${(props)=>props?.color === "red" ? "stroke: #FFAAAA" : ""}
    }
`

export const Content = styled.div`
    margin-right: 0.8vw;

    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 1.1vw;
    color: #AAAAAA;

    flex: 1;
    text-align: end;
`

