import React, { useEffect } from 'react';
import styled from 'styled-components';
import {CommentImage} from "./WorkComment";
import enterIcon from '../../static/icons/enter.svg'

const MyComment = styled.div`
  height: 84px;
  display: flex;
  padding: 20px 0px 20px 21px;
`

const CommentInput = styled.input`
  outline: none;
  height: 44px;
  width: calc(100vw - 170px);
  background: #F0F0F6;
  border-radius: 6px;
  border: none;
  padding: 12px;
  &::placeholder {
    color: #B6B6DB;
  }
`

const EnterComment = styled.div`
  margin-left: 27px;
  width: 17px;
  height: 44px;
  & > img {
    margin-top: 14px;
  }
`


export default () => {
  const clickEnterComment = () => {

  }
  return(
    <MyComment>
      <CommentImage/>
      <CommentInput placeholder='댓글을 입력해주세요.'/>
      <EnterComment onClick={clickEnterComment}><img src={enterIcon}/></EnterComment>
    </MyComment>
  )
}