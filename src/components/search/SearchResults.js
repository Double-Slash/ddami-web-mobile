import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ResultRowWM from "./ResultRowWM";
import ResultArtist from "./ResultArtist";

const SearchBody = styled.div`
  margin-top: 8px;
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
  width: 100px;
  margin: auto;
  padding: 0px 20px;
`

const SearchCategory = (props) => {
  const {selectTab, setSelectTab} = props
  const selectWork = () => {
    setSelectTab(0);
  }
  const selectMaterial = () => {
    setSelectTab(1);
  }
  const selectArtist = () => {
    setSelectTab(2);
  }
  return (
    <SearchTab>
      <CategoryTab>
        <Category className={selectTab === 0 && 'selected'} onClick={selectWork}>작품</Category>
        <Category className={selectTab === 1 && 'selected'} onClick={selectMaterial}>재료</Category>
        <Category className={selectTab === 2 && 'selected'} onClick={selectArtist}>작가</Category>
      </CategoryTab>
      <SearchSort>
        <div>인기순</div>&nbsp;&nbsp;|&nbsp;&nbsp;
        <div>최신순</div>
      </SearchSort>
    </SearchTab>
  )
}

export default () => {
  const [selectTab, setSelectTab] = useState(0);
  useEffect(()=>{
  }, [selectTab])
  return (
    <div style={{backgroundColor: '#F0F0F6', opacity: 1}}>
      <SearchBody>
        <SearchCategory selectTab={selectTab} setSelectTab={setSelectTab}/>
        {selectTab !== 2 && <ResultRowWM title='name' contents='작품 글에도 야가 들어가지롱 작품 글에도 야가 들어가지롱 작품 글에도 야가... 들어가지롱 작 ...품 글에도 야가 들어가지롱 작품 글에도'
                                         view={900} like={561} writer='김따미'/>}
        {selectTab !== 2 && <ResultRowWM title='name' contents='작품 글에도 야가 들어가지롱 작품 글에도 야가 들어가지롱 작품 글에도 야가... 들어가지롱 작 ...품 글에도 야가 들어가지롱 작품 글에도'
                                         view={900} like={561} writer='김따미'/>}
        {selectTab === 2 && <ResultArtist name='김따미' field1='산업 디자인' field2='공간 디자인'
                                          isFollowing={false}
                                          introduction='작품 글에도 야가 들어가지롱 작품 글에도 야가 들어가지롱 작품 글에도 야가... 들어가지롱 작 ...품 글에도 야가 들어가지롱 작품 글에도'
          />}
        {selectTab === 2 && <ResultArtist name='김따미' field1='산업 디자인' field2='공간 디자인'
                                          isFollowing={false}
                                          introduction='작품 글에도 야가 들어가지롱 작품 글에도 야가 들어가지롱 작품 글에도 야가... 들어가지롱 작 ...품 글에도 야가 들어가지롱 작품 글에도'
        />}
      </SearchBody>
    </div>
  )
}