import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ResultRowWM from "./ResultRowWM";
import ResultArtist from "./ResultArtist";
import {useDispatch, useSelector} from "react-redux";
import {changeSearchTab, setSearchSort} from "../../store/actions";

const Background = styled.div`
  background-color: #F0F0F6;
  padding-top: 8px;
`

const SearchBody = styled.div`
  border-top-left-radius: 16px;
`

const SearchTab = styled.nav`
  display: flex;
  background-color: white;
`

const CategoryTab = styled.div`
  text-align: center;
  display: flex;
  width: calc(100vw - 130px);
  margin-left: 10px;
`

const Category = styled.div`
  font-size: 18px;
  padding: 12px 11px;
  &.selected {
    color: #322FA0;
    font-weight: 900;
    border-bottom: 2px solid #322FA0;
  }
`

const SearchSort = styled.div`
  display: flex;
  font-size: 13px;
  color: #4D4D4D;
  width: 150px;
  margin: auto;
  padding: 0px 20px;
`

const SearchCategory = (props) => {
  const { tab } = useSelector((store) => { return store.search })
  const dispatch = useDispatch()
  const selectWork = () => dispatch(changeSearchTab(0))
  const selectMaterial = () => dispatch(changeSearchTab(1))
  const selectArtist = () => dispatch(changeSearchTab(2))
  const changeSortLike = () => dispatch(setSearchSort('L'))
  const changeSortLatest = () => dispatch(setSearchSort('D'))
  return (
    <SearchTab>
      <CategoryTab>
        <Category className={tab === 0 && 'selected'} onClick={selectWork}>작품</Category>
        <Category className={tab === 1 && 'selected'} onClick={selectMaterial}>재료</Category>
        <Category className={tab === 2 && 'selected'} onClick={selectArtist}>작가</Category>
      </CategoryTab>
      <SearchSort>
        <div onClick={changeSortLike}>인기순</div>&nbsp;&nbsp;|&nbsp;&nbsp;
        <div onClick={changeSortLatest}>최신순</div>
      </SearchSort>
    </SearchTab>
  )
}

export default () => {
  const { state, authorData, pieceData, tab } = useSelector((store) => { return store.search })
  return (
    <Background>
      <SearchBody>
        <SearchCategory/>
        {tab === 0 && pieceData.map((props, idx)=> {return <ResultRowWM key={props._id} {...props}/> }) }
        {tab === 2 && authorData.map((props, idx)=> {return <ResultArtist key={props._id} {...props}/> }) }
      </SearchBody>
    </Background>
  )
}