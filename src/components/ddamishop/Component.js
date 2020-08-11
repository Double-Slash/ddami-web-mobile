import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import SortMenu from "./SortMenu";
import FilterList from "./FilterList";
import SellingArticle from "../main/SellingArticle";

const ComponentWrapper = styled.div`
  width: 100%;
  border-radius: 16px 0 0 0;
  border: solid #ffffff 1px;
  background-color: white;
  position: relative;
  top: -44px;
  z-index: 2;
`;

const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function Component(props) {
    return (
        <ComponentWrapper>
            <Menu/>
            <SortMenu/>
            <FilterList/>
            <ArticleWrapper>
                <SellingArticle/>
                <SellingArticle/>
                <SellingArticle/>
                <SellingArticle/>
            </ArticleWrapper>
        </ComponentWrapper>
    );
}

export default Component;
