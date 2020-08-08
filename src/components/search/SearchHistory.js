import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SearchHistory = styled.section`
  background-color: #F0F0F6;
  height: calc(100vh - 120px);
  padding: 15px 0px;
`

const HistoryWord = styled.div`
  color: #808080;
  padding: 0px 18px;
  margin: 11px 0px;
`

const History = (props) => {
  const {word} = props
  return (
    <div>
      <HistoryWord>{word}</HistoryWord>
    </div>
  )
}

export default () => {
  return (
    <SearchHistory>
      <History word='인센스스틱'/>
    </SearchHistory>
  )
}
