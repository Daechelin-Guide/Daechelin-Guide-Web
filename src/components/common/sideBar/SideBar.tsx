import * as S from "./SideBar.style"

import {ReactComponent as Home} from "../../../asset/Home.svg"

import HomeIcon from "../../../asset/Home.svg"
import MealIcon from "../../../asset/Meal.svg"
import RankingIcon from "../../../asset/Ranking.svg"
import SettingIcon from "../../../asset/Setting.svg"
import { useNavigate } from "react-router-dom"

const SideBar = () => {
    const navigate = useNavigate();
    return(
        <S.Wrapper>
            <S.Back>
                <S.Title>대슐랭 가이드</S.Title>

                <S.Nav onClick={()=>{navigate('/')}}>
                    <S.NavIcon src={HomeIcon}/>
                    <S.NavTitle>급식 메뉴</S.NavTitle>
                </S.Nav>
                <S.Nav onClick={()=>{navigate('/Voting')}}>
                    <S.NavIcon src={MealIcon} />
                    <S.NavTitle>급식 투표</S.NavTitle>
                </S.Nav>
                <S.Nav onClick={()=>{navigate('/Ranking')}}>
                    <S.NavIcon src={RankingIcon} />
                    <S.NavTitle>급식 랭킹</S.NavTitle>
                </S.Nav>
                <S.Nav onClick={()=>{navigate('/Setting')}}>
                    <S.NavIcon src={SettingIcon} />
                    <S.NavTitle>설정</S.NavTitle>
                </S.Nav>

            </S.Back>
        </S.Wrapper>
    )
}

export default SideBar