import React, { useEffect } from 'react';
import styled from 'styled-components';
import WorkComment from "./WorkComment";

const WorkDetailSection = styled.div`
  margin-left: 18px;
  background-color: white;
  box-shadow: -6px 3px 20px #F0F0F0;
  border-radius: 16px 0px 0px 0px;
`

const WorkDetailContent = styled.div`
   border-bottom: 1px solid #DBDBDB;
`

const ImageList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  min-width: 276px;
  height: 318px;
  padding: 21px 18px;
`

const WorkImage = styled.div`
  flex: 0 0 auto;
  display: inline-block;
  white-space: nowrap;
  width: 276px;
  height: 276px;
  border-radius: 4px 12px 12px 12px;
  background-color: #282c34;
  margin-right: 14px;
`

const Text = styled.div`
  padding: 0 21px 24px 18px;
  font-size: 15px;
  color: #3C3C3C;
`

const CclImage = styled.div`

`

export default () => {
  return(
    <WorkDetailSection>
      <WorkDetailContent>
        <ImageList>
          <WorkImage><img src='d'/></WorkImage>
          <WorkImage><img src='d'/></WorkImage>
        </ImageList>
        <Text>
          중간에 글이 들어갈 수도 있고,<br/> 네이버 블로그 글쓰기를 참고하면 이해하기 조금 더 쉬울 듯 합니다.
        </Text>
      </WorkDetailContent>
      {/*<CclImage><img src='../../static/image/ccl.png'/></CclImage>*/}
      <WorkComment/>
    </WorkDetailSection>
  )
}