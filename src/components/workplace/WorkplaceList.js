import React, { useEffect } from 'react';
import styled from 'styled-components';
import WorkplaceCategory from "./WorkplaceCategory";

const ListBody = styled.section`
  background-color: #FFFFFF;
  margin-top: 8px;
`

export default () => {
  return(
    <ListBody>
      <WorkplaceCategory/>
    </ListBody>
  )
}