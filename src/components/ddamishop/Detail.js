import React from "react";
import styled from "styled-components";

const DetailWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const WorkImgWrapper = styled.div`
  width: 100%;
`;

const DescriptionWrapper = styled.div`
  border: solid 1px #ffffff;
  border-radius: 20px 0 0 0;
  box-shadow: -6px 3px 20px #0000001a;
  background: #ffffff 0% 0% no-repeat padding-box;
  margin-left: 18px;
  position: relative;
  margin-top: -50px;
  padding-top: 27px;
  padding-left: 27px;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TagWrapper = styled.div`
  display: flex;
  margin-bottom: 11px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 50px;
  justify-content: space-between;
`;

const LikeButton = styled.button`
  background: url("/toggleBtn-shop-like-off.svg") no-repeat;
  border: none;
  width: 25px;
  height: 25px;
`;

const MenuButton = styled.button`
  background: url("/btn-shop-detail-etc.svg") no-repeat;
  border: none;
  width: 3px;
  height: 17px;
`;

const Tag = styled.p`
  font-size: 11px;
  color: #4d4d4d;
`;

const BuyButton = styled.div`
width: 107px;
height: 40px;
background-color: #322FA0;
border-radius: 20px 0 0 0;
font-size: 16px;
color: #ffffff;
text-align: center;
float: right;
margin-top: -40px;
display: flex;
align-items: center;
justify-content: center;
`;

const Title = styled.p`
  font-size: 26px;
  font-weight: bold;
  color: #232323;
  margin-top: 0;
  margin-bottom: 10px;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 27px;
`;

const UserImg = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 46px;
  margin: 4px;
`;

const UserNickname = styled.p`
  font-size: 12px;
  color: #232323;
`;

const BarGray = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: #808080;
`;

const ContentWrapper = styled.div`
  margin: 27px 0;
`;

const Head = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #232323;
  margin: 10px 0;
`;

const Content = styled.p`
  font-size: 14px;
  color: #4d4d4d;
`;

function Detail(props) {
    return (
        <DetailWrapper>
            <WorkImgWrapper>
                <img
                    src={process.env.PUBLIC_URL + "/dummy/22.png"}
                    alt="dummy"
                    width="100%"
                />
            </WorkImgWrapper>
            <DescriptionWrapper>
                <TopWrapper>
                    <TagWrapper>
                        <Tag>그래픽 디자인</Tag>
                    </TagWrapper>
                    <ButtonWrapper>
                        <LikeButton/>
                        <MenuButton/>
                    </ButtonWrapper>
                </TopWrapper>
                <Title>작가가 지정한 제목</Title>
                <UserInfoWrapper>
                    <UserImg
                        src={process.env.PUBLIC_URL + "/dummy/22.png"}
                        alt="user-name"
                    />
                    <UserNickname>닉네임</UserNickname>
                </UserInfoWrapper>
                <BuyButton>거래하기</BuyButton>
                <BarGray/>
                <ContentWrapper>
                    <Head>가격</Head>
                    <Content>15,000원</Content>
                </ContentWrapper>
                <ContentWrapper>
                    <Head>거래 장소</Head>
                    <Content>서울과학기술대학교</Content>
                </ContentWrapper>
                <ContentWrapper>
                    <Head>설명</Head>
                    <Content>작품(어떤 작품이다) 혹은 재료(몇 번 썼다) 설명</Content>
                </ContentWrapper>
            </DescriptionWrapper>
        </DetailWrapper>
    );
}

export default Detail;
