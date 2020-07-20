import React from 'react';
import styled from 'styled-components';

const WriteEditBar = styled.div`
  display: flex;
  background-color: #F2F2F2;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 60px;
`

const Tool = styled.div`
  padding: 24px 22px;
  font-size: 12px;
  text-align: center;
`

const WriteBar = () => {
  return(
    <WriteEditBar>
      <Tool>카메라</Tool>
      <Tool>텍스트</Tool>
      <Tool>구분선</Tool>
      <Tool>배경선</Tool>
      <Tool>링크</Tool>
    </WriteEditBar>
  )
}

export default WriteBar