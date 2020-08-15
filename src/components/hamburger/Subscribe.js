import React from 'react';
import styled from "styled-components";
import 'antd/dist/antd.css';
import DotIcon from '../../static/icons/dot_menu.svg'

const Body = styled.div`
  width: 100%;
  height: 100%;
  background: #F0F0F6;
`;

const LikeTitle = styled.div`
  padding-top: 16px;
  padding-bottom: 15px;
  font-size: 18px;
  text-align: center;
  width: 100%; 
  height: 51px;
  background: #F0F0F6;
`;

const LikeSection = styled.div`
  background: #FFFFFF;
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  padding-top: 18px;
  padding-left: 18px;
  padding-right: 18px;
`;

const SubscribeSection = styled.div`
  display: flex;
  width: 100%;
  height: 114px;
  //background: yellow;
  margin-bottom: 36px;
`;

const SubImg = styled.img`
  width: 114px;
  height: 114px;
  background: dodgerblue;
`;

const SubSection = styled.div`
  margin-left: 14px;
  //background: blueviolet;
  width: 214px;
  height: 100%;
`;

const SubTitle = styled.div`
  height: 20px;
  width: 100%;
  //background: bisque;
`;

const WorkTitle = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  color: #232323;
  //background-color: yellow;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #232323;
`;

const DotImg = styled.img`
  margin-left: 120px;
  height: 22.62px;
`;


const UniversityName = styled.div`
  margin-top: 8px;
  font-size: 13px;
  color:#808080;
`;

const Time = styled.div`
  font-size: 11px;
  color: #BBBBBB;
`;

const DealSection = styled.div`
  display: flex;
  margin-top: 23px; //디자인이 맞지가 않아 조정하였습니다.
  height: 100%;
  width: 100%;
  //background: red;
`;

const Price = styled.div`
  margin-left: 7px;
  font-size: 17px;
  font-weight: bold;
  color: #232323;
  height: 100%;
`;

//여기서부터는 거래 중, 거래 완료, 거래 대기 관련 컴포넌트스타일 3가지 입니다.
const Trading = styled.div`
  padding-top: 1px;
  height: 22px;
  width: 50px;
  color:#F7606B;
  border: #F7606B solid 1px;
  border-radius: 3px;
  text-align: center;
  font-size: 12px;
`;

const TradingComplete = styled.div`
  padding-top: 2px;
  height: 22px;
  width:61px;
  border-radius: 3px;
  background-color: #BBBBBB;
  font-size: 12px;
  text-align: center;
  color: #FFFFFF;
`;

const TradingStop = styled.div`
  padding-top: 2px;
  height: 22px;
  width:61px;
  border-radius: 3px;
  background-color: #F7606B;
  font-size: 12px;
  text-align: center;
  color: #FFFFFF;
`;

const Subscribe = () => {
    return (
        <>
            <Body>
                <LikeTitle>찜한 목록</LikeTitle>
                <LikeSection>
                    <SubscribeSection>
                        <SubImg/>
                        <SubSection>
                            <SubTitle>
                                <WorkTitle>
                                   <Title> 작품 이름</Title>
                                    <DotImg src={DotIcon} alt="메뉴아이콘"/>
                                </WorkTitle>
                                <UniversityName>대학교 이름</UniversityName>
                                <Time>3개월 전</Time>
                                <DealSection>
                                    <Trading>거래 중</Trading>
                                    <Price>50,000원</Price>
                                </DealSection>
                            </SubTitle>
                        </SubSection>
                    </SubscribeSection>

                    <SubscribeSection>
                        <SubImg/>
                        <SubSection>
                            <SubTitle>
                                <WorkTitle>
                                    <Title> 작품 이름</Title>
                                    <DotImg src={DotIcon} alt="메뉴아이콘"/>
                                </WorkTitle>
                                <UniversityName>대학교 이름</UniversityName>
                                <Time>3개월 전</Time>
                                <DealSection>
                                    <TradingComplete>거래 완료</TradingComplete>
                                    <Price>50,000원</Price>
                                </DealSection>
                            </SubTitle>
                        </SubSection>
                    </SubscribeSection>

                    <SubscribeSection>
                        <SubImg/>
                        <SubSection>
                            <SubTitle>
                                <WorkTitle>
                                    <Title> 작품 이름</Title>
                                    <DotImg src={DotIcon} alt="메뉴아이콘"/>
                                </WorkTitle>
                                <UniversityName>대학교 이름</UniversityName>
                                <Time>3개월 전</Time>
                                <DealSection>
                                    <TradingStop>거래 중단</TradingStop>
                                    <Price>50,000원</Price>
                                </DealSection>
                            </SubTitle>
                        </SubSection>
                    </SubscribeSection>

                </LikeSection>
            </Body>
        </>
    );
};

export default Subscribe;
