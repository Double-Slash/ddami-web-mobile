import * as types from '../types';

const initialState = {
  data: {}
};

export default function(state = initialState, { type, payload }) {
  console.log(payload);
  switch (type) {
    case types.GET_SEARCH_AUTHOR:
      return {
        ...state,
        state: 'pending',
      };
    case types.GET_SEARCH_AUTHOR_SUCCESS:
      const { authors } = payload
      return {
        ...state,
        state: 'success',
        data: authors
      };
    case types.GET_SEARCH_AUTHOR_FAIL:
      return {
        ...state,
        state: 'fail',
      };
    default:
      return state;
  }
}