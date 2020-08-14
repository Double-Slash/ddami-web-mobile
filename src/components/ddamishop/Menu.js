import React from "react";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 342px;
  margin-left: 24px;
  margin-top: 22px;
  margin-bottom: 0;
`;

const PresentItem = styled(Link)`
  font-size: 22px;
  font-weight: bold;
  color: #322fa0;
  margin-top: 0;
  margin-right: 10px;
  margin-bottom: 0;
  padding: 12px 4.5px;
  border-bottom: solid 2px #322fa0;
  text-decoration: none;
`;

const Item = styled(Link)`
  font-size: 22px;
  font-weight: bold;
  color: #232323;
  padding: 12px 4.5px;
  margin-top: 0;
  margin-right: 10px;
  margin-bottom: 0;
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

const UnderLine = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: #dbdbdb;
`;

function Menu(props) {
    const location = useLocation();
    if (location.pathname === "/shop/pieces") {
        return (
            <>
                <MenuWrapper>
                    <PresentItem to="/shop/pieces">작품샵</PresentItem>
                    <Item to="/shop/materials">재료샵</Item>
                </MenuWrapper>
                <UnderLineWrapper>
                    <UnderLine/>
                </UnderLineWrapper>
            </>
        );
    } else if (location.pathname === "/shop/materials") {
        return (
            <>
                <MenuWrapper>
                    <Item to="/shop/pieces">작품샵</Item>
                    <PresentItem to="/shop/materials">재료샵</PresentItem>
                </MenuWrapper>
                <UnderLineWrapper>
                    <UnderLine/>
                </UnderLineWrapper>
            </>
        );
    }
    return <></>;
}

export default Menu;
