import React from 'react';
import styled from "styled-components";
import contentImg2 from "../../img/search_img2.png";


const WorkContent = styled.div`
    display: flex;
    width: 100%;
    height: 139px;
    background: skyblue;
`;

const WorkImg = styled.img`
    margin-top: 14px;
    //margin-left: 18px;
    width: 110px;
    height: 110px;
    background: yellow;
`;

const ContentSection = styled.div`
  margin-top: 21px;
  margin-left: 12px;
  display: block;
  height: 87px;
  width: 202px;
  background: chartreuse;
`;

const Title = styled.div`
  margin-bottom: 12px;
  font-size: 15px;
  color: #4D4D4D;
`;

const Description = styled.div`
   font-size: 13px;
   color: #707070;
`;

const NameSection = styled.div`
   display: flex;
   width:210px;
   height: 18px;
   background: yellow;
`;

const ProfileImage = styled.img`
  background: blue;
  width:18px;
  height: 18px;
`;

const ProfileName = styled.div`
  background: coral;
  margin-left: 6px;
  font-size: 12px;
  color: #4D4D4D;
`;

const SmallImageEye = styled.img`
  background: chocolate;  
  margin-left: 67px;
  width:15.11px;
  height:18px;
`;

const SmallText = styled.div`
  margin-left: 3px;
  background: deeppink;
  font-size: 10px;
  color: #808080;
`;

const SmallImage = styled.img`
  margin-left: 7px;
  background: chocolate;  
  width:15.11px;
  height:18px;
`;



const Artist = () => {
    return (
        <WorkContent>
            <WorkImg src={contentImg2} alt="테스트 이미지" />
            <ContentSection>
                <Title>
                    재료 작품 제목에 야가 들어감
                </Title>
                <Description>
                    작품 글에도 야가 들어가지롱 글에도 야가 들어가지롱 작품 글에도
                </Description>
                <NameSection>
                    <ProfileImage />
                    <ProfileName>
                        김따미
                    </ProfileName>
                    <SmallImageEye />
                    <SmallText>
                        900
                    </SmallText>
                    <SmallImage />
                    <SmallText>
                        500
                    </SmallText>
                </NameSection>
            </ContentSection>
        </WorkContent>
    );
};

export default Artist;