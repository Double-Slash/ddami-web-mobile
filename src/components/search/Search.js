import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SearchHistory from "./SearchHistory";
import SearchResults from "./SearchResults";
import searchIcon from '../../static/icons/btn-search-enter.svg'
import logo from '../../static/icons/img-profile1-small.png'
import {useSelector, useDispatch} from 'react-redux';
import {getSearchAuthor, getSearchWork, setFooterVisible, setSearchWord} from "../../store/actions";

export const SearchNav = styled.nav`
  z-index: 100;
  position: fixed;
  top: 0;
  display: flex;
  height: 60px;
  background-color: white;
  & > a {
    text-decoration: none;
    color: #232323;
    font-size: 22px;
    margin: auto;
    text-align: center;
    width: 70px;
  }
  
  & > .nav-logo {
    background-color: white;
    width: calc(100vw - 70px);
    margin: auto;
    font-size: 20px;
    letter-spacing: -0.8px;
    font-weight: 600;
  }
`

const SearchDiv = styled.div`
  background-color: #F0F0F6;
  padding-bottom: 42px;
`

const SearchNavbar = () => {
  return (
    <SearchNav>
      <Link to='/'>X</Link>
      <div className="nav-logo">DDAMI</div>
    </SearchNav>
  )
}

const SearchSection = styled.section`
  z-index: 100;
  background-color: #FFFFFF;
  position: fixed;
  top: 60px;
  display: flex;
  height: 62px;
`

const SearchInput = styled.input`
  width: calc(100vw - 60px);
  padding: 0 15px;
  font-size: 18px;
  border: none;
  outline: none;
  &::placeholder {
    color: #AAAAAA;
  }
`

const SearchButton = styled.div`
  text-align: center;
  width: 60px;
  margin: auto;
`

const Search = (props) => {
  const searchInput = useRef()
  const { state, tab, word, sortingBy } = useSelector((store) => { return store.search })
  const dispatch = useDispatch()

  const handleSearch = async () => {
    const tempWord = searchInput.current.value
    await dispatch(setSearchWord(tempWord))
    dispatch(getSearchWork({sortingBy}))
    dispatch(getSearchAuthor({sortingBy}))
  }

  useEffect(()=>{
    dispatch(setFooterVisible(false))
    return () => dispatch(setFooterVisible(true))
  },[])

  return(
    <SearchDiv>
      <SearchNavbar/>
      <SearchSection>
        <SearchInput ref={searchInput} placeholder='검색어를 입력해주세요'/>
        <SearchButton onClick={handleSearch}>
          <img src={searchIcon}/>
        </SearchButton>
      </SearchSection>
      {state === 'pending' && word === null ? <SearchHistory {...props}/> : <SearchResults {...props}/>}
    </SearchDiv>
  )
}

export default Search