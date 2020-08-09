import React from 'react';
import styled from 'styled-components';
import WriteTopBar from "./WriteTopBar";
import Configure from "./Configure";
import WriteBar from "./WriteBar";

const Line = styled.hr`
  color: #E4E4E4;
  size: 1px;
  margin: 0;
`

const InputBody = styled.div`
  border-top-left-radius: 50px;
  padding-top: 10px;
  width : 100%;
  input, textarea {
    outline: none;
    width : 90%;
    display: block;
    border: none;
    padding: calc(100vh-90%);
  }
`

const TitleInput = styled.input`
  &::placeholder {
    font-weight: 700;
  }
`

const ContentInput = styled.textarea`
  height: 60vh;
`

const Write = styled.div`
`

export default () => {
  return(
    <Write>
      <WriteTopBar/>
      <InputBody>
        <TitleInput placeholder='제목을 입력해주세요'/>
        <Line />
        <ContentInput placeholder='글을 입력해주세요'/>
      </InputBody>
      <Line />
      <Configure/>
      <WriteBar/>
    </Write>
  )
}
