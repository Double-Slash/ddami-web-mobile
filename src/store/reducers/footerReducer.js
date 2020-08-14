import * as types from '../types';

const initialState = {
  state: true
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_FOOTER_VISIBLE:
      return {
        ...state,
        state: payload
      }
    default:
      return state;
  }
}