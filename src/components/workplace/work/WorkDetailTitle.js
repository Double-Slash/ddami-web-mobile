import React, { useEffect } from 'react';
import styled from 'styled-components';
import etcBtn from '../../../static/icons/btn-etc.svg';
import toggleLike from '../../../static/icons/toggle-like.svg';
import viewIcon from '../../../static/icons/view.svg';
import likeIcon from '../../../static/icons/like.svg';
import {useSelector} from "react-redux";

const TitleSection = styled.section`
  padding: 20px;
`

const IconDiv = styled.div`
  text-align: right;
  height: 20px;
  & > img {
    margin-left: 20px;
  }
`

const Field = styled.div`
  font-size: 14px;
  color: #3C3C3C;
  padding: 0px 13px;
  margin-bottom: 13px;
`

const Title = styled.p`
  width: calc(100vw - 80px);
  padding: 0px 0px 20px 13px;
  font: Bold 26px/37px NanumSquare;
  color: #101010;
  margin: 0;
`

const Artist = styled.p`
  display: inline-block;
  width: 70px;
  font-size: 15px;
  height: 21px;
  & > div {
    box-shadow: 0px 3px 15px #F0F0F0;
    width: 21px;
    border-radius: 100%;
  }
`

const ViewAndLike = styled.p`
  color: #4D4D4D;
  font-size: 14px;
  line-height: 14px;
  width: 120px;
  display: inline-block;
  margin-left: auto;
  & > * {
    margin: 0px 3px;
  }
  & > img {
    height: 13px;
    margin-left: 7px;
  }
`

const TitleBottom = styled.div`
  display: flex;
  padding-left: 20px;
`

export default () => {
  const { piece } = useSelector((store) => {return store.work.work })
  const { title, author, views, likeCount, hasField } = piece
  const { userId } = author
  // author image ?
  return (
    <TitleSection>
      <IconDiv>
        <img src={toggleLike} alt='즐겨찾기'/>
        <img src={etcBtn} alt='더보기'/>
      </IconDiv>
      <Field>{hasField.reduce((prev, field, idx) => {
        if (idx === hasField.length-1) return prev + field
        return prev + `${field} ・`
      }, '')}</Field>
      <Title>{title}</Title>
      <TitleBottom>
        <Artist><img/>{userId}</Artist>
        <ViewAndLike>
          <img src={viewIcon}/>{views}
          <img src={likeIcon}/>{likeCount}
        </ViewAndLike>
      </TitleBottom>
    </TitleSection>
  )
}