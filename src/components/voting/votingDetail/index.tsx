import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import * as S from "./style"
import API from '../../../utils/API';
import axios from 'axios';

import VoteCalendar from "../../../asset/VoteCalendar.svg"
import VotedMealCalendar from "../../../asset/VotedMealCalendar.svg"
import GoldCrownIcon from "../../../asset/GoldCrown.svg"
import SliverCrownIcon from "../../../asset/SliverCrown.svg"
import BronzeCrownIcon from "../../../asset/BronzeCrown.svg"
import { eachMealRankingType, rankingType } from './type';

const VotingDetail = () => {
    const {id} = useParams()
    const mealVote = useLocation().state

    const currentDate = new Date()

    const [rankingData,setRankingData] = useState<rankingType>()

    useEffect(()=>{
        axios.all([
            // 아침
            API.get(`/vote/menu/ranking/${id}?mealType=TYPE_BREAKFAST`),

            // 점심
            API.get(`/vote/menu/ranking/${id}?mealType=TYPE_LUNCH`),

            // 저녁
            API.get(`/vote/menu/ranking/${id}?mealType=TYPE_DINNER`)
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
        <S.VotingDetailLayout>
            <S.VotingBox>
                <S.VotingBoxRow>
                    <S.VoteDateBox>
                        <S.VoteRow>
                            <S.VoteDateIcon src={VoteCalendar}/>
                            <S.VoteDateTitle>투표 기간</S.VoteDateTitle>
                            {
                                (currentDate > new Date(mealVote.voteStartDate) && currentDate < new Date(mealVote.voteEndDate)) ?
                                <S.VotingStatus status="continue">투표 진행중</S.VotingStatus> :
                                currentDate > new Date(mealVote.voteEndDate) ?
                                <S.VotingStatus status="end">투표 종료</S.VotingStatus> : 
                                <S.VotingStatus status="will">투표 예정</S.VotingStatus>
                            }
                        </S.VoteRow>
                        <S.VoteDateText>{mealVote.voteStartDate.slice(0,10)} ~ {mealVote.voteEndDate.slice(0,10)}</S.VoteDateText>
                    </S.VoteDateBox>

                    <S.VoteDateBox>
                        <S.VoteRow>
                            <S.VoteDateIcon src={VotedMealCalendar}/>
                            <S.VoteDateTitle>투표 대상 급식 기간</S.VoteDateTitle>
                        </S.VoteRow>
                        <S.VoteDateText>{mealVote.mealStartDate.slice(0,10)} ~ {mealVote.mealEndDate.slice(0,10)}</S.VoteDateText>
                    </S.VoteDateBox>
                </S.VotingBoxRow>

                <S.VoteRow>
                    <S.VoteDateIcon src={VoteCalendar}/>
                    <S.VoteDateTitle>선정 급식</S.VoteDateTitle>
                </S.VoteRow>

            <S.Wrapper>
                <S.ComponentsWrapper>
                    <S.TitleComponent color="#FFAF51">
                        조식 순위
                    </S.TitleComponent>
                    {
                        rankingData?.breakfastRanking.map((meal, index)=>(
                                <S.RankingContentWrapper color="#FFAF51">
                                    <S.RankingInfo>
                                        {index+1 == 1 && <S.Crown src={GoldCrownIcon} />}
                                        {index+1 == 2 && <S.Crown src={SliverCrownIcon} />}
                                        {index+1 == 3 && <S.Crown src={BronzeCrownIcon} />}
                                        {index+1 >= 4 && <S.Circle/>}
                                        <S.Rank color="#FFAF51">{meal.ranking}위</S.Rank>
                                        <S.Info>{Math.round(meal.totalScore * 10) / 10}</S.Info>
                                    </S.RankingInfo>
                                    <S.RankingContent>{meal.menu}</S.RankingContent>
                                </S.RankingContentWrapper>
                        ))
                    }
                </S.ComponentsWrapper>

                <S.ComponentsWrapper>
                    <S.TitleComponent color="#ABC97B">
                        중식 순위
                    </S.TitleComponent>
                    {
                        rankingData?.lunchRanking.map((meal, index)=>(
                                <S.RankingContentWrapper color="#ABC97B">
                                    <S.RankingInfo>
                                        {index+1 == 1 && <S.Crown src={GoldCrownIcon} />}
                                        {index+1 == 2 && <S.Crown src={SliverCrownIcon} />}
                                        {index+1 == 3 && <S.Crown src={BronzeCrownIcon} />}
                                        {index+1 >= 4 && <S.Circle/>}
                                        <S.Rank color="#ABC97B">{meal.ranking}위</S.Rank>
                                        <S.Info>{Math.round(meal.totalScore * 10) / 10}</S.Info>
                                    </S.RankingInfo>
                                    <S.RankingContent>{meal.menu}</S.RankingContent>
                                </S.RankingContentWrapper>
                        ))
                    }
                </S.ComponentsWrapper>

                <S.ComponentsWrapper>
                    <S.TitleComponent color="#CF75CC">
                        석식 순위
                    </S.TitleComponent>
                    {
                        rankingData?.dinnerRanking.map((meal, index)=>(
                                <S.RankingContentWrapper color="#CF75CC">
                                    <S.RankingInfo>
                                        {index+1 == 1 && <S.Crown src={GoldCrownIcon} />}
                                        {index+1 == 2 && <S.Crown src={SliverCrownIcon} />}
                                        {index+1 == 3 && <S.Crown src={BronzeCrownIcon} />}
                                        {index+1 >= 4 && <S.Circle/>}
                                        <S.Rank color="#CF75CC">{meal.ranking}위</S.Rank>
                                        <S.Info>{Math.round(meal.totalScore * 10) / 10}</S.Info>
                                    </S.RankingInfo>
                                    <S.RankingContent>{meal.menu}</S.RankingContent>
                                </S.RankingContentWrapper>
                        ))
                    }
                </S.ComponentsWrapper>
            </S.Wrapper>

            </S.VotingBox>
        </S.VotingDetailLayout>
    );
};

export default VotingDetail;