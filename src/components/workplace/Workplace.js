import React, { useEffect } from 'react';
import styled from 'styled-components';
import WorkPlaceProfile from "./WorkplaceProfile";
import WorkplaceList from "./WorkplaceList";

const WorkplaceBody = styled.section`
  background-color: #F0F0F6;
`

const WorkPlace = (props) => {
  const { match: { params } } = props
  const { id } = params

  return(
    <WorkplaceBody>
      <WorkPlaceProfile name='이따미' userId='idid123' major='시각디자인학과' field1='그래픽 디자인' field2='영상 디자인'/>
      <WorkplaceList/>
    </WorkplaceBody>
  )
}

export default WorkPlace