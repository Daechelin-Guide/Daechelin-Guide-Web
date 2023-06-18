import * as S from "./Setting.style"
import ArrowIcon from "../../asset/Arrow.svg"
import { useState } from "react"

const Setting = () => {
    const [showEngineer, setShowEngineer] = useState<boolean>(false);

    return (
        <>
            <S.Wrapper>
                <S.ComponentWrapper>
                    <S.Label>학교 변경</S.Label>
                    <S.ContentWrapper>
                        대구소프트웨어마이스터고등학교
                        <S.Arrow direction="left" src={ArrowIcon} />
                    </S.ContentWrapper>
                </S.ComponentWrapper>

                <S.ComponentWrapper>
                    <S.Label>개인정보 관리</S.Label>
                    <S.ContentWrapper>
                        개인정보 처리방침
                        <S.Arrow direction="left" src={ArrowIcon} />
                    </S.ContentWrapper>
                </S.ComponentWrapper>

                <S.ComponentWrapper>
                    <S.Label>앱 정보</S.Label>

                    <S.ContentWrapper>
                        현재 버전
                        <S.Content>2.0.0</S.Content>
                    </S.ContentWrapper>

                    <S.ContentComplexWrapper>
                        개발팀
                        <S.Content>대소고 A급 남자들</S.Content>
                        <S.Arrow direction={showEngineer ? "down" : "up"} src={ArrowIcon} onClick={()=>{setShowEngineer(!showEngineer)}} />
                    </S.ContentComplexWrapper>

                    {
                        showEngineer &&
                        <>
                            <S.ContentWrapper>
                                Web
                                <S.Content>조수현</S.Content>
                            </S.ContentWrapper>

                            <S.ContentWrapper>
                                Android
                                <S.Content>최희건   조승완</S.Content>
                            </S.ContentWrapper>

                            <S.ContentWrapper>
                                iOS
                                <S.Content>이민규</S.Content>
                            </S.ContentWrapper>

                            <S.ContentWrapper>
                                Server
                                <S.Content>강지석</S.Content>
                            </S.ContentWrapper>
                        </>
                    }

                </S.ComponentWrapper>

                <S.ComponentWrapper>
                    <S.Label>후원</S.Label>
                    <S.ContentWrapper>
                        개발자들에게 커피 사주기
                        <S.Arrow direction="left" src={ArrowIcon} />
                    </S.ContentWrapper>
                </S.ComponentWrapper>

            </S.Wrapper>
        </>
    )
}

export default Setting;