import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style"
import API from "../../utils/API";
import { voteType } from "./type";
import VoteCalendar from "../../asset/VoteCalendar.svg"
import VotedMealCalendar from "../../asset/VotedMealCalendar.svg"

const Vote = () => {
    const navigate = useNavigate();
    const isAdmin:boolean = localStorage.getItem("accessToken") ? true : false

    const [voteList,setVoteList] = useState<voteType[]>()

    const currentDate = new Date()

    useEffect(()=>{
        if (!isAdmin){
            alert("관리자 기능입니다. 먼저 로그인을 해주세요.")
            navigate("/signin")
        } else{
            API.get('/vote/list')
            .then((res)=>{
                setVoteList((res.data.voteResponse).sort((a:voteType,b:voteType)=> b.id - a.id ))
            })
        }
    },[])

    return (
        <S.VotingLayout>
            <S.PostBtnWrapper>
                <S.PostBtn
                    onClick={()=>{navigate('/voting/making')}}
                >투표 개시하기</S.PostBtn>
            </S.PostBtnWrapper>

            {
                voteList?.map((mealVote)=>(
                    <S.VotingBox key={mealVote.id}>
                        <S.DetailBtn
                            onClick={() => {
                                navigate(
                                    `/voting/${mealVote.id}`,
                                    { state: mealVote }
                                )
                            }}
                        >자세히 보기</S.DetailBtn>

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
                    </S.VotingBox>
                ))
            }
        </S.VotingLayout>
    )
}

export default Vote;