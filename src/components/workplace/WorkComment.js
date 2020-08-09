import React, { useEffect } from 'react';
import styled from 'styled-components';

const Comment = styled.div`
  padding: 20px 18px 23px 21px;
  border-bottom: 1px solid #DDDDDD;
  border-bottom-color: rgba(200,200,200,0.8);
  display: flex;
`

const NickName = styled.span`
  font-weight: bold;
  margin-right: 8px;
`

const CommentDate = styled.div`
  display: inline-block;
  color: #BBBBBB;
  font-size: 12px;
`

const CommentImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 100%;
  box-shadow: 0px 3px 15px #0000001A;
  margin-right: 20px;
`

const CommentText = styled.div`
  color: #4D4D4D;
`

const CommentReply = styled.span`
  margin-left: auto;
  font-size: 12px;
  color: #808080;
`

const WorkComment = () => {
  return(
    <Comment>
      <CommentImage/>
      <div>
        <NickName>닉네임</NickName>
        <CommentDate>2020.07.08</CommentDate>
        <CommentText>진짜 멋있어요!</CommentText>
      </div>
      <CommentReply>답글</CommentReply>
    </Comment>
  )
}

const CommentSection = styled.section`
`

export default () => {
  return (
    <CommentSection>
      <WorkComment/>
      <WorkComment/>
    </CommentSection>
  )
}