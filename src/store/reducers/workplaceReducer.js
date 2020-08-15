import * as types from '../types';

const initialState = {
  state: 'pending',
  type: 0,
  workplace: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.POST_WORKPLACE:
      return {
        ...state,
        type: 0,
        state: 'pending'
      }
    case types.POST_WORKPLACE_SUCCESS:
      return {
        ...state,
        state: 'success',
        type: 0,
        workplace: {...payload}
      }
    case types.POST_WORKPLACE_FAIL:
      return {
        ...state,
        type: 0,
        state: 'fail'
      }
    case types.POST_WORKPLACE_MY:
      return {
        ...state,
        type: 1,
        state: 'pending'
      }
    case types.POST_WORKPLACE_MY_SUCCESS:
      return {
        ...state,
        stateMy: 'success',
        type: 1,
        workplace: {...payload}
      }
    case types.POST_WORKPLACE_MY_FAIL:
      return {
        ...state,
        type: 1,
        state: 'fail'
      }
    default:
      return state;
  }
}