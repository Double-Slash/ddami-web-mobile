import React from "react";
import Description from "./Description";
import Component from "./Component";
import styled from "styled-components";

const ShopWrapper = styled.div`
position: relative; 
`;

function DdamiShop(props) {
    return (
        <ShopWrapper>
            <Description/>
            <Component/>
        </ShopWrapper>
    );
}

export default DdamiShop;
