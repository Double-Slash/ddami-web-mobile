import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const WorkplaceCategory = styled.div`
  color: #626262;
  padding-left: 18px;
  overflow-x: scroll;
  height: 60px;
  display: flex;
  font-weight: 400;
`

const CategoryDiv = styled.div`
  white-space: nowrap;
  font-size: 14px;
  padding: 20px 10px 20px 10px;
  border-bottom: 1px solid #F0F0F0;
  &.selected {
    color: #322FA0;
    font-weight: 600;
    border-bottom: 2px solid #322FA0;
  }
`

const Category = (props) => {
  const {id, title, count, setSelectTab, selectTab} = props
  return(
    <CategoryDiv className={selectTab === id && 'selected'} onClick={()=>setSelectTab(id)}>{title} {count}</CategoryDiv>
  )
}

export default (props) => {
  const {selectTab, setSelectTab} = props
  return(
    <WorkplaceCategory>
      <Category selectTab={selectTab} id={0} title='전체분야' count={5} setSelectTab={setSelectTab}/>
      <Category selectTab={selectTab} id={1} title='커스텀1' count={5} setSelectTab={setSelectTab}/>
      <Category selectTab={selectTab} id={2} title='커스텀2' count={5} setSelectTab={setSelectTab}/>
      <Category selectTab={selectTab} id={3} title='커스텀3' count={5} setSelectTab={setSelectTab}/>
      <Category selectTab={selectTab} id={4} title='커스텀4' count={5} setSelectTab={setSelectTab}/>
    </WorkplaceCategory>
  )
}
