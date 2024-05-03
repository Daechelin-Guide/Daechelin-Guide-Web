import * as S from "./Ranking.style"

import breakfastIcon from "../../asset/breakfastIcon.svg"
import lunchIcon from "../../asset/lunchIcon.svg"
import dinnerIcon from "../../asset/dinnerIcon.svg"
import GoldCrownIcon from "../../asset/GoldCrown.svg"
import SliverCrownIcon from "../../asset/SliverCrown.svg"
import BronzeCrownIcon from "../../asset/BronzeCrown.svg"

import { useEffect, useState } from "react"
import API from "../../utils/API"
import axios from "axios"

interface eachMealRankingType {
    id: number,
    menu: string,
    date: string,
    cal: string,
    totalScore: number,
    ranking: number
}

interface rankingType {
    breakfastRanking : eachMealRankingType[]
    lunchRanking : eachMealRankingType[]
    dinnerRanking : eachMealRankingType[]
}

const Ranking = () => {

    let now = new Date();

    const [rankingData,setRankingData] = useState<rankingType>({
        breakfastRanking : [
            {
                id: 0,
                menu: "",
                date: "",
                cal: "",
                totalScore: 0,
                ranking: 0
            }
        ],
        lunchRanking : [
            {
                id: 0,
                menu: "",
                date: "",
                cal: "",
                totalScore: 0,
                ranking: 0
            }
        ],
        dinnerRanking : [
            {
                id: 0,
                menu: "",
                date: "",
                cal: "",
                totalScore: 0,
                ranking: 0
            }
        ]
    })

    useEffect(()=>{
        axios.all([
            // 아침
            API.get(`/ranking?mealType=TYPE_BREAKFAST`),

            // 점심
            API.get(`/ranking?mealType=TYPE_LUNCH`),

            // 저녁
            API.get(`/ranking?mealType=TYPE_DINNER`)
        ])
            .then(axios.spread((breakfastRankingData,lunchRankingData,dinnerRankingData) => {
                setRankingData({
                    breakfastRanking : breakfastRankingData.data.ranking.sort((a:eachMealRankingType,b:eachMealRankingType)=>a.ranking - b.ranking),
                    lunchRanking : lunchRankingData.data.ranking.sort((a:eachMealRankingType,b:eachMealRankingType)=>a.ranking - b.ranking),
                    dinnerRanking : dinnerRankingData.data.ranking.sort((a:eachMealRankingType,b:eachMealRankingType)=>a.ranking - b.ranking)
                })
            }))
    },[])

    return (
        <>
            <S.Wrapper>
                <S.ComponentsWrapper>
                    <S.TitleComponent color="#FFAF51">
                        <S.TitleIcon src={breakfastIcon} />
                        조식랭킹
                    </S.TitleComponent>
                    {
                        rankingData.breakfastRanking.map((meal, index)=>(
                                <S.RankingContentWrapper color="#FFAF51">
                                    <S.RankingInfo>
                                        {index+1 === 1 && <S.Crown src={GoldCrownIcon} />}
                                        {index+1 === 2 && <S.Crown src={SliverCrownIcon} />}
                                        {index+1 === 3 && <S.Crown src={BronzeCrownIcon} />}
                                        {index+1 >= 4 && <S.Circle/>}
                                        <S.Rank color="#FFAF51">{meal.ranking}위</S.Rank>
                                        <S.Date>{now.getMonth()}월 {now.getDay()+index}일</S.Date>
                                    </S.RankingInfo>
                                    <S.RankingContent>{meal.menu}</S.RankingContent>
                                </S.RankingContentWrapper>
                        ))
                    }
                </S.ComponentsWrapper>

                <S.ComponentsWrapper>
                    <S.TitleComponent color="#ABC97B">
                        <S.TitleIcon src={lunchIcon} />
                        중식랭킹
                    </S.TitleComponent>
                    {
                        rankingData.lunchRanking.map((meal, index)=>(
                                <S.RankingContentWrapper color="#ABC97B">
                                    <S.RankingInfo>
                                        {index+1 === 1 && <S.Crown src={GoldCrownIcon} />}
                                        {index+1 === 2 && <S.Crown src={SliverCrownIcon} />}
                                        {index+1 === 3 && <S.Crown src={BronzeCrownIcon} />}
                                        {index+1 >= 4 && <S.Circle/>}
                                        <S.Rank color="#ABC97B">{meal.ranking}위</S.Rank>
                                        <S.Date>{now.getMonth()}월 {now.getDay()+index}일</S.Date>
                                    </S.RankingInfo>
                                    <S.RankingContent>{meal.menu}</S.RankingContent>
                                </S.RankingContentWrapper>
                        ))
                    }
                </S.ComponentsWrapper>

                <S.ComponentsWrapper>
                    <S.TitleComponent color="#CF75CC">
                        <S.TitleIcon src={dinnerIcon} />
                        석식랭킹
                    </S.TitleComponent>
                    {
                        rankingData.dinnerRanking.map((meal, index)=>(
                                <S.RankingContentWrapper color="#CF75CC">
                                    <S.RankingInfo>
                                        {index+1 === 1 && <S.Crown src={GoldCrownIcon} />}
                                        {index+1 === 2 && <S.Crown src={SliverCrownIcon} />}
                                        {index+1 === 3 && <S.Crown src={BronzeCrownIcon} />}
                                        {index+1 >= 4 && <S.Circle/>}
                                        <S.Rank color="#CF75CC">{meal.ranking}위</S.Rank>
                                        <S.Date>{now.getMonth()}월 {now.getDay()+index}일</S.Date>
                                    </S.RankingInfo>
                                    <S.RankingContent>{meal.menu}</S.RankingContent>
                                </S.RankingContentWrapper>
                        ))
                    }
                </S.ComponentsWrapper>

                
            </S.Wrapper>
        </>
    )
}

export default Ranking;