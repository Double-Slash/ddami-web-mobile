import * as types from '../types';

const initialState = {
  state: 'pending',
  type: 0, // 1 -> mine
  work: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_WORK:
      return {
        ...state,
        type: 0,
        state: 'pending'
      }
    case types.GET_WORK_SUCCESS:
      return {
        ...state,
        state: 'success',
        type: 0,
        work: {...payload}
      }
    case types.GET_WORK_FAIL:
      return {
        ...state,
        type: 0,
        state: 'fail'
      }
    default:
      return state;
  }
}