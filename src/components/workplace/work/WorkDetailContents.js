import React, { useEffect } from 'react';
import styled from 'styled-components';
import WorkComment from "./WorkComment";
import {useSelector} from "react-redux";
import ccl from '../../../static/image/ccl.png';

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
  & > img {
    flex: 0 0 auto;
    display: inline-block;
    white-space: nowrap;
    width: 276px;
    height: 276px;
    border-radius: 4px 12px 12px 12px;
    background-color: #282c34;
    margin-right: 14px;
  }
`

const Text = styled.div`
  padding: 0 21px 24px 18px;
  font-size: 15px;
  color: #3C3C3C;
`

const CclImage = styled.div`
  margin: 0px 0px 24px 21px;
  & > img {
  width: 84px;
  }
`

export default () => {
  const { piece } = useSelector((store) => {return store.work.work })
  const { fileUrl, description } = piece
  //
  return(
    <WorkDetailSection>
      <WorkDetailContent>
        <ImageList>
          { fileUrl.map((url,idx) => { return <WorkImage key={idx}><img src={url}/></WorkImage>})}
        </ImageList>
        <Text>
          {description}
        </Text>
        <CclImage><img src={ccl}/></CclImage>
      </WorkDetailContent>
      <WorkComment/>
    </WorkDetailSection>
  )
}