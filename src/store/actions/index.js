import * as types from '../types';

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

export function getSearchAuthorFail(result){
  return {
    type: types.GET_SEARCH_AUTHOR_SUCCESS,
    result
  }
}