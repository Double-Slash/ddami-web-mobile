import React from "react";
import styled from "styled-components";
import PromoteArticle from "./PromoteArticle";

const DdamiMaeul = styled.div`
  z-index: 3;
  position: relative;
  top: -68px;
  height: 622px;
  margin-left: 18px;
  background-color: #ffffff;
  box-shadow: -6px 3px 20px #00000014;
  border-radius: 24px 0px 0px 0px;
  margin-bottom: -68px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 342px;
  height: 71px;
  margin-left: 24px;
`;

const Menu = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #322fa0;
  margin-right: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #232323;
  margin-right: 58px;
`;

const MoreBtn = styled.a`
  font-size: 12px;
  color: #808080;
`;

const UnderLineWrapper = styled.div`
  width: 100%;
  height: 2px;
  margin-left: 24px;
  margin-bottom: 28px;
  display: flex;
  flex-directions: row;
`;

const UnderLineBlue = styled.div`
  width: 60px;
  height: 2px;
  background-color: #322fa0;
`;

const UnderLine = styled.div`
  width: 258px;
  height: 0.5px;
  background-color: #dbdbdb;
`;

const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function MainDdamiMaeul() {
    return (
        <DdamiMaeul>
            <Header>
                <Menu>따미마을</Menu>
                <Description>실시간 인기 게시물</Description>
                <MoreBtn>더보기 ></MoreBtn>
            </Header>
            <UnderLineWrapper>
                <UnderLineBlue/>
                <UnderLine/>
            </UnderLineWrapper>
            <ArticleWrapper>
                <PromoteArticle/>
                <PromoteArticle/>
                <PromoteArticle/>
                <PromoteArticle/>
            </ArticleWrapper>
        </DdamiMaeul>
    );
}

export default MainDdamiMaeul;
