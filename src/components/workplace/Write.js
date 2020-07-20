import React from 'react';
import styled from 'styled-components';
import Configure from "./Configure";
import WriteBar from "./WriteBar";

const Line = styled.hr`
  color: #E4E4E4;
  size: 1px;
  margin: 0;
`

const WriteTop = styled.div`
  padding: 10px;
  display: flex;
  color: #808080;
  button: {
    outline: none;
    border: none;
  }
`

const TemporarySave = styled.div`

`

const InputBody = styled.div`
  padding: 10px 0px;
  width : 100%;
  input {
    outline: none;
    width : auto;
    display: block;
    border: none;
    padding: 20px;
  }
`

const TitleInput = styled.input`
  &::placeholder {
    font-weight: 700;
  }
`

const ContentInput = styled.input`
  height: 60vh;
`

const Write = () => {
  return(
    <div>
      <WriteTop>
        <div>X</div>
        <TemporarySave></TemporarySave>
        <button>등록</button>
      </WriteTop>
      <InputBody>
        <TitleInput placeholder='제목을 입력해주세요'/>
        <Line />
        <ContentInput placeholder='글을 입력해주세요'/>
      </InputBody>
      <Line />
      <Configure/>
      <WriteBar/>
    </div>
  )
}

export default Write