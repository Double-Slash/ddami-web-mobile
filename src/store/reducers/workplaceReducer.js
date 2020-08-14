import * as types from '../types';

const initialState = {
  state: 'pending',
  myInfo: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.POST_WORKPLACE_MY:
      return {
        ...state,
        state: 'pending'
      }
    case types.POST_WORKPLACE_MY_SUCCESS:
      return {
        ...state,
        state: 'success',
        myInfo: {...payload}
      }
    case types.POST_WORKPLACE_MY_FAIL:
      return {
        ...state,
        state: 'fail'
      }
    default:
      return state;
  }
}