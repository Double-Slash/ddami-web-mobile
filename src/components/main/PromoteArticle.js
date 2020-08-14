import React from "react";
import styled from "styled-components";

const ImgBox = styled.div`
  width: 144px;
  height: 114px;
`;

const Wrapper = styled.div`
  width: 144px;
  height: 199px;
  margin-left: 21px;
  margin-right: 15px;
  margin-bottom: 11px;
`;

const ProductName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-height: 1.5rem;
  max-width: 100%;
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
`;

const UniversityName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-height: 1.5rem;
  max-width: 100%;
  font-size: 12px;
  color: #808080;
  margin: 5px 0;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserImg = styled.img`
  width: 17px;
  height: 17px;
  border-radius: 46px;
  margin: 4px;
`;

const UserNickname = styled.p`
  font-size: 13px;
  color: #232323;
`;

function PromoteArticle() {
    return (
        <Wrapper>
            <ImgBox>
                <img src={process.env.PUBLIC_URL + "/dummy/22.png"} alt="dummy"/>
            </ImgBox>
            <ProductName>작품 이름 (한 줄 이상은 말을 줄입니다)</ProductName>
            <UniversityName>대학교 이름</UniversityName>
            <UserInfoWrapper>
                <UserImg
                    src={process.env.PUBLIC_URL + "/dummy/22.png"}
                    alt="user-name"
                />
                <UserNickname>닉네임</UserNickname>
            </UserInfoWrapper>
        </Wrapper>
    );
}

export default PromoteArticle;
