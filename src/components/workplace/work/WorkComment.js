import React, { useEffect } from 'react';
import styled from 'styled-components';
import MyComment from "./MyComment";
import {useSelector} from "react-redux";

const Comment = styled.div`
  padding: 0 0 0 21px;
  
`

const CommentLine = styled.div`
  display: flex;
  padding: 23px 18px 23px 0;
  border-bottom: 1px solid #DDDDDD;
  border-bottom-color: rgba(200,200,200,0.2);
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

export const CommentImage = styled.img`
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

const WorkComment = (props) => {
  const { user, content, created } = props
  const { imageUrl, userName } = user
  console.log(imageUrl)
  const convertFormat = (date) => {
    if (date.length > 10) return `${date.slice(0,4)}.${date.slice(5,7)}.${date.slice(8,10)}`
    else return ''
  }
  const replyComment = () => {

  }
  return(
    <Comment>
      <CommentLine>
        <CommentImage src={imageUrl}/>
        <div>
          <NickName>{userName}</NickName>
          <CommentDate>{convertFormat(created)}</CommentDate>
          <CommentText>{content}</CommentText>
        </div>
        <CommentReply onClick={replyComment}>답글</CommentReply>
      </CommentLine>
    </Comment>
  )
}

const CommentSection = styled.section`
`

export default () => {
  const { piece } = useSelector((store) => {return store.work.work })
  const { comments } = piece
  return (
    <CommentSection>
      { comments.map((comment)=> {
        const { _id } = comment
        return <WorkComment key={_id} {...comment}/>
      })}
      <MyComment/>
    </CommentSection>
  )
}