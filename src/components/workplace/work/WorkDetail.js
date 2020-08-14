import React, { useEffect } from 'react';
import styled from 'styled-components';
import WorkDetailTitle from "./WorkDetailTitle";
import WorkDetailContents from "./WorkDetailContents";
import bgImage1 from '../../../static/image/work-bgGrahpic1.svg'
import bgImage2 from '../../../static/image/work-bgGrahpic2.svg'
import {useDispatch, useSelector} from "react-redux";
import {getWorkDetail} from "../../../store/actions";

const WorkDetail = styled.section`
  padding-top: 18px;
  position: relative;
  overflow-x: hidden;
`

const BgImage1 = styled.div`
  z-index: -1;
  position: absolute;
  top: 55px;
  left: -35px;
`

const BgImage2 = styled.div`
  z-index: -1;
  position: absolute;
  top: 193px;
  right: -85px;
`

export default (props) => {
  const { match: { params } } = props
  const { state } = useSelector((store) => {return store.work })
  const { workId } = params
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getWorkDetail({id: workId}))
  },[])
  return(
    <WorkDetail>
      { state === 'success' && <WorkDetailTitle/> }
      <BgImage1><img src={bgImage1}/></BgImage1>
      <BgImage2><img src={bgImage2}/></BgImage2>
      { state === 'success' && <WorkDetailContents/> }
    </WorkDetail>
  )
}