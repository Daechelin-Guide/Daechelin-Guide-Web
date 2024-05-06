import React, { useState } from 'react';
import * as S from "./style"
import VoteCalendar from "../../../asset/VoteCalendar.svg"
import VotedMealCalendar from "../../../asset/VotedMealCalendar.svg"
import { dateDataType } from './type';
import API from '../../../utils/API';
import { useNavigate } from 'react-router-dom';

const VotingMaking = () => {
    const navigate = useNavigate();
    const [dateData,setDateData] = useState<dateDataType>({
        mealStartDate: undefined,
        mealEndDate: undefined,
        voteStartDate: undefined,
        voteEndDate: undefined
    })

    const handlesubmit = () => {
        if (dateData.mealStartDate === undefined || dateData.mealEndDate === undefined || dateData.voteStartDate === undefined || dateData.voteEndDate === undefined ){
            alert("기간을 모두 입력해주세요.")
        } 
        // 투표 기간이 현재 날짜보다 이전일때
        else if(dateData.voteStartDate < new Date()) {
            alert("투표 기간을 현재 날짜 이후로 설정해주세요.")
        }
        // 투표 끝나는 날짜가 시작하는 날짜보다 이전 일 때
        else if(dateData.voteStartDate > dateData.voteEndDate) {
            alert("투표 시작 날짜보다 마감 날짜가 나중이어야 합니다 ")
        }
        // 급식 시작하는 날짜가 투표 끝나는 날짜보다 이전일 때 
        else if(dateData.mealStartDate < dateData.voteEndDate){
            alert("투표가 끝난 뒤 급식 기간이 시작되도록 설정해주세요.")
        }
        // 급식 끝나는 날짜가 시작하는 날짜보다 이전일 때
        else if (dateData.mealStartDate > dateData.mealEndDate) {
            alert("급식 시작 날짜보다 마감 날짜가 나중이어야 합니다 ")
        } else {
            API.post("/vote/create",dateData)
            .then(()=>{
                navigate("/")
            })
        }
    }

    return (
        <S.VotingMakingLayout>
            <S.VotingBox>
                <S.VoteRow>
                    <S.VoteDateIcon src={VotedMealCalendar}/>
                    <S.VoteDateTitle>투표 기간</S.VoteDateTitle>
                </S.VoteRow>
                <S.DateInputWrapper>
                    <S.DateInput type='date'
                        onChange={(e)=>{
                            setDateData({...dateData, voteStartDate: new Date(e.target.value)})
                        }}
                    />
                    <>~</>
                    <S.DateInput type='date'
                        onChange={(e)=>{
                            setDateData({...dateData, voteEndDate: new Date(e.target.value)})
                        }}
                    />
                </S.DateInputWrapper>

                <S.VoteRow>
                    <S.VoteDateIcon src={VotedMealCalendar}/>
                    <S.VoteDateTitle>투표 대상 급식 기간</S.VoteDateTitle>
                </S.VoteRow>
                <S.DateInputWrapper>
                    <S.DateInput type='date'
                        onChange={(e)=>{
                            setDateData({...dateData, mealStartDate: new Date(e.target.value)})
                        }}
                    />
                    <>~</>
                    <S.DateInput type='date'
                        onChange={(e)=>{
                            setDateData({...dateData, mealEndDate: new Date(e.target.value)})
                        }}
                    />
                </S.DateInputWrapper>

                <S.PostBtnWrapper>
                    <S.PostBtn
                        onClick={handlesubmit}
                    >투표 개시하기</S.PostBtn>
                </S.PostBtnWrapper>
            </S.VotingBox>
        </S.VotingMakingLayout>
    );
};

export default VotingMaking;