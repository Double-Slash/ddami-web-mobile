// redux/user/saga.js
import {call, put, all, takeLatest} from 'redux-saga/effects';
import {requestHandler} from "../lib/axios";
import * as types from '../types';
import * as actions from '../actions';

function* getSearchAuthor({payload}) {
  try {

    const { data } = yield call(requestHandler, {
      path: '/author/search',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // data: {...payload, list:0, count:5}
    })
    yield put(getSearchAuthor.success(data))
  } catch (e) {
    console.log(e);
    yield put(getSearchAuthor.failure(e)) // yield 생략 -> infinite loop
  }
  yield put(actions.getSearchAuthor());
}

export default all([
  takeLatest(types.GET_SEARCH_AUTHOR, getSearchAuthor),
]);