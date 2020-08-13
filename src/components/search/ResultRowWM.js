import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import likeIcon from '../../static/icons/like.svg';
import viewIcon from '../../static/icons/view.svg';

export const RowBody = styled.div`
  height: 140px;
  background-color: white;
  border-top: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
  display: flex;
`

export const RowImage = styled.div`
  padding: 14px 18px;
  & > img {
    border-radius: 2px 6px 6px 6px;
    background-color: #282c34;
    width: 110px;
    height: 110px;
  }
`

export const RowText = styled.div`
  width: 100%;
  padding: 20px 2px;
`

const RowTitle = styled.div`
  font-size: 15px;
  color: #4D4D4D;
`

export const RowContents = styled.div`
  padding: 12px 18px 12px 0px;
  height: 37px;
  overflow: hidden;
  color: #707070;
  font-size: 13px;
  line-height: 23px;
  position: absolute;
`

const RowBottom = styled.div`
  display: flex;
  font-size: 10px;
  color: #808080;
  margin-top: 5px;
  position: relative;
  top: 50px;
`

const RowWriter = styled.div`
  bottom: -23px;
  font-size: 12px;
  color: #4D4D4D;
  width: calc(90% - 80px);
`

const WriteImage = styled.img`
  border-radius: 100%;
  width: 18px;
  height: 18px;
  box-shadow: 0px 3px 15px #0000001A;
`

const RowView = styled.div`
  width: 40px;
  margin-left: auto;
  margin-top: 5px;
`

const RowLike = styled.div`
  margin-top: 5px;
  width: 40px;
`

export default (props) => {
  const { fileUrl, title, description, author: {userId, imageUrl}, views, likeCount, writerImage } = props
  const onClickRow = () => {

  }
  return(
    <RowBody onClick={onClickRow}>
      <RowImage><img src={fileUrl[0]}/></RowImage>
      <RowText>
        <RowTitle>{title}</RowTitle>
        <RowContents>{description}</RowContents>
        <RowBottom>
          <RowWriter><WriteImage src={imageUrl}/>&nbsp;&nbsp;{userId}</RowWriter>
          <RowView><img src={viewIcon}/>&nbsp;{views}</RowView>
          <RowLike><img src={likeIcon}/>&nbsp;{likeCount}</RowLike>
        </RowBottom>
      </RowText>
    </RowBody>
  )
}