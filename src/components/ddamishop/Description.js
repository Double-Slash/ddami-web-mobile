import React from 'react';
import styled from "styled-components";

const DescriptionWrapper = styled.div`
width: 100%;
height: 183px;
background-color: #F3F2FF;
`;

const Name = styled.p`
font-size: 24px;
font-weight: bold;
margin-top: 0;
margin-left: 24px;
margin-bottom: 0;
padding-top: 38px;
`;

const DescriptionText = styled.p`
font-size: 15px;
font-weight: bold;
margin: 8px 25px 25px;
`;

function Description() {
    return (
        <DescriptionWrapper>
            <Name>따미샵</Name>
            <DescriptionText>미술 전공자들의 작품을 구매해보세요!</DescriptionText>
        </DescriptionWrapper>
    );
}

export default Description;