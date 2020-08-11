import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SearchHistory from "./SearchHistory";
import SearchResults from "./SearchResults";
import searchIcon from '../../static/icons/btn-search-enter.svg'
import {connect, useSelector, useDispatch} from 'react-redux';

export const SearchNav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  height: 60px;
  background-color: white;
  & > a {
    text-decoration: none;
    font-size: 30px;
    margin: auto;
    text-align: center;
    width: 70px;
  }
  
  & > .nav-logo {
    width: calc(100vw - 70px);
    margin: auto;
  }
`

const SearchNavbar = () => {
  return (
    <SearchNav>
      <Link to='/'>X</Link>
      <div className="nav-logo">따미 로고</div>
    </SearchNav>
  )
}

const SearchSection = styled.section`
  margin-top: 60px;
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
    opacity: 1;
  }
`

const SearchButton = styled.div`
  text-align: center;
  width: 60px;
  margin: auto;
`

const Search = () => {
  const [searchState, setSearchState] = useState(0)
  const [searchWord, setSearchWord] = useState(null)
  const searchInput = useRef()
  const searchStore = useSelector((store) => { return store.search })
  const dispatch = useDispatch()

  const handleSearch = () => {
    const tempWord = searchInput.current.value
    setSearchWord(tempWord)
    // dispatch('GET_SEARCH_AUTHOR',{author:'에'})
  }
  useEffect(()=> {
    if (searchWord) {
      setSearchState(1);

    }
  }, [searchWord])

  return(
    <div>
      <SearchNavbar/>
      <SearchSection>
        <SearchInput ref={searchInput} placeholder='검색어를 입력해주세요'/>
        <SearchButton onClick={handleSearch}>
          <img src={searchIcon}/>
        </SearchButton>
      </SearchSection>
      {searchState === 0 && <SearchHistory/>}
      {searchState === 1 && <SearchResults/>}
    </div>
  )
}

export default Search