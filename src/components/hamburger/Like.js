import React from 'react';
import styled from "styled-components";

import heartIcon from "../../static/icons/toggleBtn-like-on.svg"

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  row-gap: 14px;
  background: #ffffff;
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  padding-top: 20px;
  padding-left: 16px;
`;

const WorkSection = styled.div`
  width: 157px;
  height: 178px;
  //background: cadetblue;
  border-radius: 6px;
  border: 0.5px solid #DBDBDB;
`;

const WorkImg = styled.img`
  width: 100%;
  height: 127px;
  background: crimson;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px; 
`;

const WorkTitleSection = styled.div`
  padding-left: 9px;
  padding-top: 8px;
  width: 100%;
  //background: yellow;
`;

const WorkTitle = styled.div`
  height: 16px;
  font-size: 14px;
  color: #232323;
  font-weight: bold;
`;

const WorkLikeSection = styled.div`
  display: flex;
  height:16.15px;
  width: 100%;
  margin-top: 4px;
  padding-left: 9px;
  //background: dodgerblue;
`;

const ProfileImg = styled.img`
  height: 15px;
  width: 15px;
  background: chartreuse;
`;

const Nickname = styled.div`
  margin-left: 5px;
  font-size: 11px;
  color: #4D4D4D;
`;

const Heart = styled.img`
  margin-left: 70.23px;
  width: 18px;
  height: 16.15px;
  //background: darkblue;
`;

const Like = () => {
    return (
        <>
            <Body>
                <LikeTitle>좋아요한 작품 목록</LikeTitle>
                <LikeSection>
                    <WorkSection>
                        <WorkImg/>
                        <WorkTitleSection>
                            <WorkTitle>작품 이름</WorkTitle>
                        </WorkTitleSection>
                        <WorkLikeSection>
                            <ProfileImg src={process.env.PUBLIC_URL + "/dummy/22.png"}
                                        alt="user-name"/>
                            <Nickname>닉네임</Nickname>
                            <Heart  src={heartIcon} alt="좋아요 아이콘"/>
                        </WorkLikeSection>
                    </WorkSection>

                    <WorkSection>
                        <WorkImg/>
                        <WorkTitleSection>
                            <WorkTitle>작품 이름</WorkTitle>
                        </WorkTitleSection>
                        <WorkLikeSection>
                            <ProfileImg src={process.env.PUBLIC_URL + "/dummy/22.png"}
                                        alt="user-name"/>
                            <Nickname>닉네임</Nickname>
                            <Heart  src={heartIcon} alt="좋아요 아이콘"/>
                        </WorkLikeSection>
                    </WorkSection>

                    <WorkSection>
                        <WorkImg/>
                        <WorkTitleSection>
                            <WorkTitle>작품 이름</WorkTitle>
                        </WorkTitleSection>
                        <WorkLikeSection>
                            <ProfileImg src={process.env.PUBLIC_URL + "/dummy/22.png"}
                                        alt="user-name"/>
                            <Nickname>닉네임</Nickname>
                            <Heart  src={heartIcon} alt="좋아요 아이콘"/>
                        </WorkLikeSection>
                    </WorkSection>

                    <WorkSection>
                        <WorkImg/>
                        <WorkTitleSection>
                            <WorkTitle>작품 이름</WorkTitle>
                        </WorkTitleSection>
                        <WorkLikeSection>
                        <ProfileImg src={process.env.PUBLIC_URL + "/dummy/22.png"}
                                alt="user-name"/>
                            <Nickname>닉네임</Nickname>
                            <Heart  src={heartIcon} alt="좋아요 아이콘"/>
                        </WorkLikeSection>
                    </WorkSection>

                    <WorkSection>
                        <WorkImg/>
                        <WorkTitleSection>
                            <WorkTitle>작품 이름</WorkTitle>
                        </WorkTitleSection>
                        <WorkLikeSection>
                            <ProfileImg src={process.env.PUBLIC_URL + "/dummy/22.png"}
                                        alt="user-name"/>
                            <Nickname>닉네임</Nickname>
                            <Heart  src={heartIcon} alt="좋아요 아이콘"/>
                        </WorkLikeSection>
                    </WorkSection>

                    <WorkSection>
                        <WorkImg/>
                        <WorkTitleSection>
                            <WorkTitle>작품 이름</WorkTitle>
                        </WorkTitleSection>
                        <WorkLikeSection>
                            <ProfileImg src={process.env.PUBLIC_URL + "/dummy/22.png"}
                                        alt="user-name"/>
                            <Nickname>닉네임</Nickname>
                            <Heart  src={heartIcon} alt="좋아요 아이콘"/>
                        </WorkLikeSection>
                    </WorkSection>

                </LikeSection>

            </Body>

        </>
    );
};

export default Like;
