// redux/user/saga.js
import {call, put, all, takeLatest} from 'redux-saga/effects';
import {requestHandler} from "../lib/axios";
import * as types from '../types';
import * as actions from '../actions';
import {GET_SEARCH_AUTHOR} from "../types";

function* getSearchAuthor({payload}) {
  try {
    const { data } = yield call(requestHandler, {
      path: '/author/search',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      // data: {...payload, list:0, count:5}/
    })
    yield put(actions.getSearchAuthorSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(actions.getSearchAuthorFail(e)) // yield 생략 -> infinite loop
  }
}

export default all([
  takeLatest(types.GET_SEARCH_AUTHOR, getSearchAuthor),
]);