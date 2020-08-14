import React from "react";
import {useLocation} from "react-router-dom";
import Description from "./Description";
import ShopItems from "./ShopItems";
import styled from "styled-components";

const ShopWrapper = styled.div`
position: relative; 
`;

function DdamiShop(props) {
    const location = useLocation();
    if (location.pathname === "/shop") {
        location.href = "/shop/pieces"
    }
    return (
        <ShopWrapper>
            <Description/>
            <ShopItems/>
        </ShopWrapper>
    );
}

export default DdamiShop;
