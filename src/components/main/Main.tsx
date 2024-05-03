import React, { useEffect, useState } from "react";
import * as S from "./MainStyled";
import breakfastIcon from "../../asset/breakfastIcon.svg"
import lunchIcon from "../../asset/lunchIcon.svg"
import dinnerIcon from "../../asset/dinnerIcon.svg"
import ArrowIcon from "../../asset/Arrow.svg"
import API from "../../utils/API";
import axios from "axios";

type resMeal = {
    id: number,
    menu: string,
    date: string,
    cal: string,
    totalScore: number,
    nutrients: string,
    mealType: string
}

type serverData = {
    date : string;
    breakfast : resMeal;
    lunch : resMeal;
    dinner : resMeal;
}

const Main = () => {
    const [currentTime,setCurrentTime] = useState<Date>(new Date())

    const [requestDate,setRequestDate] = useState<string>(
        `${currentTime.getFullYear().toString()}${(currentTime.getMonth() + 1).toString().padStart(2,'0')}${currentTime.getDate().toString().padStart(2,'0')}`
    )
    console.log(requestDate)
    const [serverData, setServerData] = useState<serverData>({
        date : "",
        breakfast : {
            id: 0,
            menu: "",
            date: "",
            cal: "",
            totalScore: 0,
            nutrients: "",
            mealType: ""
        },
        lunch : {
            id: 0,
            menu: "",
            date: "",
            cal: "",
            totalScore: 0,
            nutrients: "",
            mealType: ""
        },
        dinner : {
            id: 0,
            menu: "",
            date: "",
            cal: "",
            totalScore: 0,
            nutrients: "",
            mealType: ""
        },
    })

    const updateDate = () => {
        setRequestDate(
            `${currentTime.getFullYear().toString()}${(currentTime.getMonth() + 1).toString().padStart(2,'0')}${currentTime.getDate().toString().padStart(2,'0')}`
        )
    }

    const moveOneDay = (direction:string) => {
        if(direction === "right"){
            setCurrentTime(new Date(currentTime.setDate(currentTime.getDate() + 1)))
        }
        if(direction === "left"){
            setCurrentTime(new Date(currentTime.setDate(currentTime.getDate() - 1)))
        }
        updateDate()
    }
    
    useEffect(()=>{
        axios.all([
            // 아침
            API.get(`/menu/detail?date=${requestDate}&mealType=TYPE_BREAKFAST`),

            // 점심
            API.get(`/menu/detail?date=${requestDate}&mealType=TYPE_LUNCH`),

            // 저녁
            API.get(`/menu/detail?date=${requestDate}&mealType=TYPE_DINNER`)
        ])
            .then(axios.spread((breakfastData,lunchData,dinnerData) => {
                setServerData({
                    date : breakfastData.data.date,
                    breakfast : breakfastData.data,
                    lunch : lunchData.data,
                    dinner : dinnerData.data,
                })
            }))

    },[requestDate])

    return (
        <>
            <S.Wrapper>
                <S.Arrow src={ArrowIcon} direction="left" onClick={()=>{moveOneDay("left")}}></S.Arrow>

                <S.ContentWrapper>
                    <S.DateDiv>{serverData.date}</S.DateDiv>

                    <S.MealComponent color="#FFAF51">
                        <S.MealIcon src={breakfastIcon} />

                        <div>
                            <S.MealInfo>
                                <S.WhenMeal color="#FFAF51">조식</S.WhenMeal>
                                <S.Kcal>{serverData.breakfast.cal}</S.Kcal>
                            </S.MealInfo>
                            
                            <S.MealContent>{serverData.breakfast.menu ? serverData.breakfast.menu : "급식 정보가 없어요ㅜㅜ 유감이에요ㅜㅜ"}</S.MealContent>
                        </div>

                    </S.MealComponent>

                    <S.MealComponent color="#ABC97B">
                        <S.MealIcon src={lunchIcon} />

                        <S.MealRightBox>
                            <S.MealInfo>
                                <S.WhenMeal color="#ABC97B">중식</S.WhenMeal>
                                <S.Kcal>{serverData.lunch.cal}</S.Kcal>
                            </S.MealInfo>
                            
                            <S.MealContent>{serverData.lunch.menu ? serverData.lunch.menu : "급식 정보가 없어요ㅜㅜ 유감이에요ㅜㅜ"}</S.MealContent>
                        </S.MealRightBox>
                        
                    </S.MealComponent>

                    <S.MealComponent color="#CF75CC">
                        <S.MealIcon src={dinnerIcon} />
                        <div>
                            <S.MealInfo>
                                <S.WhenMeal color="#CF75CC">석식</S.WhenMeal>
                                <S.Kcal>{serverData.dinner.cal}</S.Kcal>
                            </S.MealInfo>
                            
                            <S.MealContent>{serverData.dinner.menu ? serverData.dinner.menu : "급식 정보가 없어요ㅜㅜ 유감이에요ㅜㅜ"}</S.MealContent>
                        </div>

                    </S.MealComponent>
                </S.ContentWrapper>

                <S.Arrow src={ArrowIcon} direction="right" onClick={()=>{moveOneDay("right")}}></S.Arrow>

            </S.Wrapper>
        </>
    )
}

export default Main;