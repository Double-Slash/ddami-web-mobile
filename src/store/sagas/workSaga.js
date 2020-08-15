// redux/user/saga.js
import {call, put, all, takeLatest, select} from 'redux-saga/effects';
import {requestHandler} from "../lib/axios";
import * as types from '../types';
import * as actions from '../actions';

function* getWorkDetail({payload}) {
  const { id } = payload
  try {
    const { data } = yield call(requestHandler, {
      path: `/piece/detail/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    yield put(actions.getWorkDetailSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(actions.getWorkDetailFail())
  }
}


export default all([
  takeLatest(types.GET_WORK, getWorkDetail),
]);