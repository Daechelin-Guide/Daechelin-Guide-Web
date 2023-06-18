import * as S from "./Ranking.style"

import breakfastIcon from "../../asset/breakfastIcon.svg"
import lunchIcon from "../../asset/lunchIcon.svg"
import dinnerIcon from "../../asset/dinnerIcon.svg"
import GoldCrownIcon from "../../asset/GoldCrown.svg"
import SliverCrownIcon from "../../asset/SliverCrown.svg"
import BronzeCrownIcon from "../../asset/BronzeCrown.svg"

import { useEffect } from "react"

const Ranking = () => {
    const MaxCnt:number[] = [1,2,3,4,5,6,7,8,9,10]

    let now = new Date();


    return (
        <>
            <S.Wrapper>
                <S.ComponentsWrapper>
                    <S.TitleComponent color="#FFAF51">
                        <S.TitleIcon src={breakfastIcon} />
                        조식랭킹
                    </S.TitleComponent>
                    {
                        MaxCnt.map((element, index)=>(
                                <S.RankingContentWrapper color="#FFAF51">
                                    <S.RankingInfo>
                                        {index+1 == 1 && <S.Crown src={GoldCrownIcon} />}
                                        {index+1 == 2 && <S.Crown src={SliverCrownIcon} />}
                                        {index+1 == 3 && <S.Crown src={BronzeCrownIcon} />}
                                        {index+1 >= 4 && <S.Circle/>}
                                        <S.Rank color="#FFAF51">{index+1}위</S.Rank>
                                        <S.Date>{now.getMonth()}월 {now.getDay()+index}일</S.Date>
                                    </S.RankingInfo>
                                    <S.RankingContent>쇠고기야채죽,*모닝빵크래미샌드위치,나박김치,허쉬초코크런치시리얼+우유, 바나나</S.RankingContent>
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
                        MaxCnt.map((element, index)=>(
                                <S.RankingContentWrapper color="#ABC97B">
                                    <S.RankingInfo>
                                        {index+1 == 1 && <S.Crown src={GoldCrownIcon} />}
                                        {index+1 == 2 && <S.Crown src={SliverCrownIcon} />}
                                        {index+1 == 3 && <S.Crown src={BronzeCrownIcon} />}
                                        {index+1 >= 4 && <S.Circle/>}
                                        <S.Rank color="#ABC97B">{index+1}위</S.Rank>
                                        <S.Date>{now.getMonth()}월 {now.getDay()+index}일</S.Date>
                                    </S.RankingInfo>
                                    <S.RankingContent>쇠고기야채죽,*모닝빵크래미샌드위치,나박김치,허쉬초코크런치시리얼+우유, 바나나</S.RankingContent>
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
                        MaxCnt.map((element, index)=>(
                                <S.RankingContentWrapper color="#CF75CC">
                                    <S.RankingInfo>
                                        {index+1 == 1 && <S.Crown src={GoldCrownIcon} />}
                                        {index+1 == 2 && <S.Crown src={SliverCrownIcon} />}
                                        {index+1 == 3 && <S.Crown src={BronzeCrownIcon} />}
                                        {index+1 >= 4 && <S.Circle/>}
                                        <S.Rank color="#CF75CC">{index+1}위</S.Rank>
                                        <S.Date>{now.getMonth()}월 {now.getDay()+index}일</S.Date>
                                    </S.RankingInfo>
                                    <S.RankingContent>쇠고기야채죽,*모닝빵크래미샌드위치,나박김치,허쉬초코크런치시리얼+우유, 바나나</S.RankingContent>
                                </S.RankingContentWrapper>
                        ))
                    }
                </S.ComponentsWrapper>

                
            </S.Wrapper>
        </>
    )
}

export default Ranking;