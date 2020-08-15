import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const SearchHistory = styled.section`
  margin-top: 60px;
  background-color: #F0F0F6;
  height: calc(100vh - 120px);
  padding: 15px 0px;
`

const WordSection = styled.section`
  display: flex;
  margin: 5px 0;
`

const HistoryWord = styled.div`
  color: #808080;
  padding: 0px 18px;
  margin: 11px 0px;
  width: calc(100vw - 60px);
`
const DeleteHistory = styled.div`
  width: 60px;
  margin: auto;
  text-align: center;
  color: #808080;
`

const History = (props) => {
  const {word} = props
  const handleDelete = () => {

  }
  return (
    <WordSection>
      <HistoryWord>{word}</HistoryWord>
      <DeleteHistory>X</DeleteHistory>
    </WordSection>
  )
}

export default () => {
  return (
    <SearchHistory>
      <History word='인센스 스틱'/>
      <History word='김따미'/>
    </SearchHistory>
  )
}
