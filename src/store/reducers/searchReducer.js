import * as types from '../types';

const initialState = {
  tab: 0,
  word: null,
  sortingBy: "D",
  state: 'pending',
  authorData: [],
  pieceData: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_SEARCH_WORD:
      return {
        ...state,
        word: payload
      }
    case types.SET_SEARCH_SORT:
      return {
        ...state,
        sortingBy: payload
      }
    case types.CHANGE_SEARCH_TAB:
      return {
        ...state,
        tab: payload
      }
    case types.GET_SEARCH_AUTHOR:
      return {
        ...state,
        state: 'pending',
        ...payload
      };
    case types.GET_SEARCH_AUTHOR_SUCCESS:
      const { authors } = payload
      return {
        ...state,
        state: 'success',
        authorData: authors
      };
    case types.GET_SEARCH_AUTHOR_FAIL:
      return {
        ...state,
        state: 'fail',
        authorData: []
      };
    case types.GET_SEARCH_WORK:
      return {
        ...state,
        state: 'pending',
        ...payload
      };
    case types.GET_SEARCH_WORK_SUCCESS:
      const { pieces } = payload
      return {
        ...state,
        state: 'success',
        pieceData: pieces
      };
    case types.GET_SEARCH_WORK_FAIL:
      return {
        ...state,
        state: 'fail',
        pieceData: []
      };
    default:
      return state;
  }
}