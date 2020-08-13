// redux/user/saga.js
import {call, put, all, takeLatest, select} from 'redux-saga/effects';
import {requestHandler} from "../lib/axios";
import * as types from '../types';
import * as actions from '../actions';

function* getSearchAuthor({payload}) {
  try {
    const { data } = yield call(requestHandler, {
      path: '/api/author/search',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        ...payload
      }
    })
    yield put(actions.getSearchAuthorSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(actions.getSearchAuthorFail(e)) // yield 생략 -> infinite loop
  }
}

function* getSearchWork({payload}) {
  try {
    const { data } = yield call(requestHandler, {
      path: '/api/search',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        ...payload
      }
    })
    yield put(actions.getSearchWorkSuccess(data))
  } catch (e) {
    console.log(e)
    yield put(actions.getSearchWorkFail())
  }
}

export default all([
  takeLatest(types.GET_SEARCH_AUTHOR, getSearchAuthor),
  takeLatest(types.GET_SEARCH_WORK, getSearchWork),
]);