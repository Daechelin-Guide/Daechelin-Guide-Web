import * as S from "./style"

import {ReactComponent as Home} from "../../../asset/Home.svg"

import HomeIcon from "../../../asset/Home.svg"
import MealIcon from "../../../asset/Meal.svg"
import RankingIcon from "../../../asset/Ranking.svg"
import SettingIcon from "../../../asset/Setting.svg"
import { Link, redirect, useNavigate } from "react-router-dom"

const SideBar = () => {
    const navigate = useNavigate();

    const isAdmin:boolean = localStorage.getItem("accessToken") ? true : false

    return(
        <S.Wrapper>
            <S.Back>
                <S.Title>대슐랭 가이드</S.Title>
                {
                    isAdmin &&
                    <S.isAdminText>관리자 모드</S.isAdminText>
                }

                <S.Nav onClick={()=>{navigate('/')}}>
                    <S.NavIcon src={HomeIcon}/>
                    <S.NavTitle>급식 메뉴</S.NavTitle>
                </S.Nav>
                <S.Nav onClick={()=>{
                    navigate('/voting')
                }}>
                    <S.NavIcon src={MealIcon} />
                    <S.NavTitle>급식 투표</S.NavTitle>
                </S.Nav>
                <S.Nav onClick={()=>{navigate('/ranking')}}>
                    <S.NavIcon src={RankingIcon} />
                    <S.NavTitle>급식 랭킹</S.NavTitle>
                </S.Nav>
                <S.Nav onClick={()=>{navigate('/setting')}}>
                    <S.NavIcon src={SettingIcon} />
                    <S.NavTitle>설정</S.NavTitle>
                </S.Nav>
                <S.Nav
                    onClick={()=>{navigate("/signin")}}
                >
                    <S.NavIcon/>
                    <S.NavTitle>로그인</S.NavTitle>
                </S.Nav>

            </S.Back>
        </S.Wrapper>
    )
}

export default SideBar