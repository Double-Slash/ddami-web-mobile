import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const ImgBox = styled.div`
  width: 144px;
  height: 114px;
`;

const Wrapper = styled.div`
  width: 144px;
  height: 199px;
  margin-left: 21px;
  margin-right: 15px;
  margin-bottom: 11px;
`;

const ProductName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-height: 1.5rem;
  max-width: 100%;
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
`;

const UniversityName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-height: 1.5rem;
  max-width: 100%;
  font-size: 12px;
  color: #808080;
  margin: 5px 0;
`;

const Price = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #322fa0;
  margin: 5px 0;
`;

function SellingArticle() {
    return (
        <Wrapper>
            <Link to="/detail/1">
                <ImgBox>
                    <img src={process.env.PUBLIC_URL + "/dummy/22.png"} alt="dummy"/>
                </ImgBox>
            </Link>
            <ProductName>작품 이름 (한 줄 이상은 말을 줄입니다)</ProductName>
            <UniversityName>대학교 이름</UniversityName>
            <Price>15,000원</Price>
            {/*TODO : 조회수, 좋아요*/}
        </Wrapper>
    );
}

export default SellingArticle;
