import * as types from '../types';

const initialState = {
  data: {}
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_SEARCH_AUTHOR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}