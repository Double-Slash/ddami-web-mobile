import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {RowBody, RowText, RowContents} from "./ResultRowWM";
import artistIcon from '../../static/icons/certification-mark.svg'
import {useSelector} from "react-redux";


const ArtistImage = styled.div`
  padding: 24px 18px;
  & > img {
    box-shadow: 0px 0px 12px #0000001A;
    border-radius: 100%;
    width: 90px;
    height: 90px;
  }
`

const ArtistName = styled.div`
  padding: 7px 0px 4px 0px;
  font-size: 15px;
  color: #232323;
`

const ArtistField = styled.div`
  color: #999999;
  font-size: 13px;
`

const ArtistIntro = styled(RowContents)`
  color: #4D4D4D;
  padding: 10px 18px 12px 0px;
`

export const FollowButton = styled.button`
  position: absolute;
  margin-top: 5px;
  right: 20px;
  width: 66px;
  height: 24px;
  background: #322FA0 0% 0% no-repeat padding-box;
  border-radius: 12px 4px 12px 12px;
  opacity: 1;
  border: none;
  font-size: 11px;
  text-align: center;
  color: white;
`

export default (props) => {
  const { _id, likeField, imageUrl, userId, stateMessage, followByMe} = props
  const clickFollow = () => {

  }
  const routeWorkplace= () => {
    props.history.push(`/workplace/${_id}`)
  }

  return(
    <RowBody onClick={routeWorkplace}>
      <ArtistImage><img src={imageUrl}/></ArtistImage>
      <RowText>
        {!followByMe && <FollowButton onClick={clickFollow}>+Follow</FollowButton>}
        <ArtistName><img src={artistIcon}/>&nbsp;{userId}</ArtistName>
        <ArtistField>{likeField[0]} ・ {likeField[1]}</ArtistField>
        <ArtistIntro>{stateMessage}</ArtistIntro>
      </RowText>
    </RowBody>
  )
}