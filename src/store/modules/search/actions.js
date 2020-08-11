import * as types from './types';

export function getSearchAuthor(author){
  return {
    type: types.GET_SEARCH_AUTHOR,
    payload: author
  }
}
