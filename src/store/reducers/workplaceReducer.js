import * as types from '../types';

const initialState = {
  state: 'pending',
  stateMy: 'pending',
  workplace: [],
  workplaceMy: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.POST_WORKPLACE:
      return {
        ...state,
        state: 'pending'
      }
    case types.POST_WORKPLACE_SUCCESS:
      return {
        ...state,
        state: 'success',
        workplace: {...payload}
      }
    case types.POST_WORKPLACE_FAIL:
      return {
        ...state,
        state: 'fail'
      }
    case types.POST_WORKPLACE_MY:
      return {
        ...state,
        stateMy: 'pending'
      }
    case types.POST_WORKPLACE_MY_SUCCESS:
      return {
        ...state,
        stateMy: 'success',
        workplaceMy: {...payload}
      }
    case types.POST_WORKPLACE_MY_FAIL:
      return {
        ...state,
        stateMy: 'fail'
      }
    default:
      return state;
  }
}