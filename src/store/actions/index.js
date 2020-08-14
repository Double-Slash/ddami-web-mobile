import * as types from '../types';

export function setSearchWord(word){
  return {
    type: types.SET_SEARCH_WORD,
    payload: word
  }
}

export function setSearchSort(word){
  return {
    type: types.SET_SEARCH_SORT,
    payload: word
  }
}

export function changeSearchTab(tab){
  return {
    type: types.CHANGE_SEARCH_TAB,
    payload: tab
  }
}

export function getSearchAuthor(author){
  return {
    type: types.GET_SEARCH_AUTHOR,
    payload: author
  }
}

export function getSearchAuthorSuccess(payload){
  return {
    type: types.GET_SEARCH_AUTHOR_SUCCESS,
    payload
  }
}

export function getSearchAuthorFail(){
  return {
    type: types.GET_SEARCH_AUTHOR_SUCCESS,
  }
}

export function getSearchWork(payload){
  return {
    type: types.GET_SEARCH_WORK,
    payload
  }
}

export function getSearchWorkSuccess(payload){
  return {
    type: types.GET_SEARCH_WORK_SUCCESS,
    payload
  }
}

export function getSearchWorkFail(){
  return {
    type: types.GET_SEARCH_WORK_FAIL,
  }
}

export function postWorkplaceMy(payload){
  return {
    type: types.POST_WORKPLACE_MY,
    payload
  }
}

export function postWorkplaceMySuccess(payload){
  return {
    type: types.POST_WORKPLACE_MY_SUCCESS,
    payload
  }
}

export function postWorkplaceMyFail(){
  return {
    type: types.POST_WORKPLACE_MY_FAIL,
  }
}

export function postWorkplace(payload){
  return {
    type: types.POST_WORKPLACE,
    payload
  }
}

export function postWorkplaceSuccess(payload){
  return {
    type: types.POST_WORKPLACE_SUCCESS,
    payload
  }
}

export function postWorkplaceFail(){
  return {
    type: types.POST_WORKPLACE_FAIL,
  }
}

export function setFooterVisible(payload){
  return {
    type: types.SET_FOOTER_VISIBLE,
    payload
  }
}