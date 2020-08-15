// redux/user/saga.js
import {call, put, all, takeLatest, select} from 'redux-saga/effects';
import {requestHandler} from "../lib/axios";
import * as types from '../types';
import * as actions from '../actions';

function* postWorkplaceMy({payload}) {
  try {
    const { data } = yield call(requestHandler, {
      path: '/user/myInfo',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    yield put(actions.postWorkplaceMySuccess(data));
  } catch (e) {
    console.log(e);
    yield put(actions.postWorkplaceMyFail())
  }
}

function* postWorkplace({payload}) {
  console.log('daaaa')
  const {id} = payload
  try {
    const { data } = yield call(requestHandler, {
      path: `/user/detail/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    console.log(data)
    yield put(actions.postWorkplaceSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(actions.postWorkplaceFail())
  }
}

export default all([
  takeLatest(types.POST_WORKPLACE_MY, postWorkplaceMy),
  takeLatest(types.POST_WORKPLACE, postWorkplace),
]);