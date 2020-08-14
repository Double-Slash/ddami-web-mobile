import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import WorkPlaceProfile from "./WorkplaceProfile";
import WorkplaceList from "./WorkplaceList";
import {useDispatch} from "react-redux";
import {postWorkplace, postWorkplaceMy} from "../../store/actions";

const WorkplaceBody = styled.section`
  background-color: #F0F0F6;
`

const WorkPlace = (props) => {
  const [ isMine, setIsMine ] = useState(false)
  const dispatch = useDispatch();
  const { match: { params } } = props
  const { ArtistId } = params
  useEffect(() => {
    if (ArtistId === 'my') {
      setIsMine(true)
      dispatch(postWorkplaceMy({}))
    }
    else dispatch(postWorkplace({id: ArtistId}))
  },[])

  return(
    <WorkplaceBody>
      <WorkPlaceProfile isMine={isMine} name='이따미' userId='idid123' major='시각디자인학과' field1='그래픽 디자인' field2='영상 디자인'/>
      <WorkplaceList/>
    </WorkplaceBody>
  )
}

export default WorkPlace