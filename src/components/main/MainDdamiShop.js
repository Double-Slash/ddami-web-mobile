import React, {useEffect} from "react";
import styled from "styled-components";
import SellingArticle from "./SellingArticle";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {postAllPiece} from "../../store/actions";

const DdamiShop = styled.div`
  margin-left: 18px;
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
  justify-content: space-between;
  width: 342px;
  height: 71px;
  margin-left: 24px;
`;

const Menu = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #322fa0;
  margin-right: 10px;
  margin-top: 28px;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #232323;
  margin-right: 23px;
`;

const MoreBtn = styled(Link)`
  font-size: 12px;
  color: #808080;
  text-decoration: none;
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
  width: 100%;
  height: 0.5px;
  background-color: #dbdbdb;
`;

const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function MainDdamiShop() {
    const {products} = useSelector(store => store.shop)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postAllPiece())
    }, [])
    return (
        <DdamiShop>
            <Header>
                <Menu>따미샵</Menu>
                <Description>미대생의 작품&재료 스토어</Description>
                <MoreBtn to="/shop/pieces">더보기 ></MoreBtn>
            </Header>
            <UnderLineWrapper>
                <UnderLineBlue/>
                <UnderLine/>
            </UnderLineWrapper>
            <ArticleWrapper>
                {products.slice(0, 4).map((item) => {
                    console.log(products)
                    const {_id, likeCount, locationName, title, price, views, pieces} = item
                    const {fileUrl} = pieces[0]
                    return (
                        <SellingArticle _id={_id} likeCount={likeCount} locationName={locationName} title={title}
                                        price={price} views={views} fileUrl={fileUrl}/>
                    )
                })}
            </ArticleWrapper>
        </DdamiShop>
    );
}

export default MainDdamiShop;
