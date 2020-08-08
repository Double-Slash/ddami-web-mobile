import React from 'react';
import styled from "styled-components";
import SellingArticle from "./SellingArticle";


const DdamiShop = styled.div`
top: 243px;
left: 18px;
height: 622px;
z-index: 2;
background-color: #ffffff;
box-shadow: -6px 3px 20px #00000014;
border-radius: 24px 0px 0px 0px;
opacity: 1;
margin-left: 18px;
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
color: #322FA0;
margin-right: 10px;
`;

const Description = styled.p`
font-size: 14px;
font-weight: bold;
color: #232323;
margin-right: 23px;
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
background-color: #322FA0;
`;

const UnderLine = styled.div`
width: 258px;
height: 0.5px;
background-color: #DBDBDB;
`;

const ArticleWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`;

function MainDdamiShop() {
    return (
        <DdamiShop>
            <Header>
                <Menu>따미샵</Menu>
                <Description>미대생의 작품&재료 스토어</Description>
                <MoreBtn>더보기 ></MoreBtn>
            </Header>
            <UnderLineWrapper>
                <UnderLineBlue/>
                <UnderLine/>
            </UnderLineWrapper>
            <ArticleWrapper>
                <SellingArticle/>
                <SellingArticle/>
                <SellingArticle/>
                <SellingArticle/>
            </ArticleWrapper>
        </DdamiShop>
    );
}

export default MainDdamiShop;
