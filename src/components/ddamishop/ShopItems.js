import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import styled from "styled-components";
import Menu from "./Menu";
import SortMenu from "./SortMenu";
import FilterList from "./FilterList";
import SellingArticle from "../main/SellingArticle";
import {useDispatch, useSelector} from "react-redux";
import {postAllMaterial, postAllPiece} from "../../store/actions";

const ComponentWrapper = styled.div`
  width: 100%;
  border-radius: 16px 0 0 0;
  border: solid #ffffff 1px;
  background-color: white;
  position: relative;
  margin-top: -44px;
  z-index: 2;
`;

const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function ShopItems(props) {
    const location = useLocation();
    const {products} = useSelector(store => store.shop)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(location.pathname === "/shop/pieces" ?
            postAllPiece() :
            postAllMaterial())
    }, [])

    return (
        <ComponentWrapper>
            <Menu/>
            <SortMenu/>
            <FilterList/>
            <ArticleWrapper>
                {products.map((item) => {
                    const {_id, likeCount, locationName, title, price, views, pieces} = item
                    const {fileUrl} = pieces[0]
                    return (
                        <SellingArticle _id={_id} likeCount={likeCount} locationName={locationName} title={title}
                                        price={price} views={views} fileUrl={fileUrl}/>
                    )
                })}
            </ArticleWrapper>
        </ComponentWrapper>
    );
}

export default ShopItems;
