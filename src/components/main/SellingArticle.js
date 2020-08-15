import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import EyeIcon from "../../static/icons/img-eye-small.svg"
import HeartIcon from "../../static/icons/img-like-small.svg";

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

const InfoWrapper = styled.div`
width: 78px;
height: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
color: #B1B1B1;
font-size: 10px;
`;

const Number = styled.p`
color: #B1B1B1;
font-size: 10px;
`;

function SellingArticle({_id, likeCount, locationName, title, price, views, fileUrl}) {
    const detailUrl = "/detail/" + _id
    return (
        <Wrapper>
            <Link to={detailUrl}>
                <ImgBox>
                    <img src={fileUrl} alt="piece" width="100%" height="100%"/>
                </ImgBox>
            </Link>
            <ProductName>{title}</ProductName>
            <UniversityName>{locationName}</UniversityName>
            <Price>{price}원</Price>
            <InfoWrapper>
                <img src={EyeIcon} alt="eye"/>
                <Number>{views}</Number>
                <img src={HeartIcon} alt="like"/>
                <Number>{likeCount}</Number>
            </InfoWrapper>
        </Wrapper>
    );
}

export default SellingArticle;
