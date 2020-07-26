import React, { useEffect } from 'react';
import styled from 'styled-components';
import WorkPlaceProfile from "./WorkplaceProfile";

const WorkPlace = (props) => {
  const { match: { params } } = props
  const { id } = params

  return(
    <div>
      <WorkPlaceProfile/>
    </div>
  )
}

export default WorkPlace