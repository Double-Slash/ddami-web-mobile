import React, { useEffect } from 'react';
import styled from 'styled-components';
import toggleLike from '../../static/icons/toggle-like.svg';
import viewIcon from '../../static/icons/view.svg';
import likeIcon from '../../static/icons/like.svg';

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
  padding: 0px 20px;
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

export default (props) => {
  const { field1, field2, title, artist, view, like } = props
  return (
    <TitleSection>
      <IconDiv>
        <img src={toggleLike} alt='즐겨찾기'/>
        <img src={toggleLike} alt='더보기'/>
      </IconDiv>
      <Field>그래픽 디자인 ・ 편집디자인</Field>
      <Title>작가가 지정한 제목 최대폭 지정으로 여러줄 표기</Title>
      <TitleBottom>
        <Artist>
          <img/>
          김따미
        </Artist>
        <ViewAndLike>
          <img src={viewIcon}/>900
          <img src={likeIcon}/>560
        </ViewAndLike>
      </TitleBottom>
    </TitleSection>
  )
}