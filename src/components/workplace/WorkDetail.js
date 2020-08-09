import React, { useEffect } from 'react';
import styled from 'styled-components';
import WorkDetailTitle from "./WorkDetailTitle";
import WorkDetailContents from "./WorkDetailContents";

const WorkDetail = styled.section`
  padding-top: 18px;
`

export default (props) => {
  // useEffect data fetch
  return(
    <WorkDetail>
      <WorkDetailTitle/>
      <WorkDetailContents/>
    </WorkDetail>
  )
}