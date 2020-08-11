// redux/user/saga.js
import {call, put, all, takeLatest} from 'redux-saga/effects';
import {requestHandler} from "../lib/axios";
import * as types from '../types';
import * as actions from '../actions';

function* getSearchAuthor(action) {
  try {
    console.log(action)
    // const userInfo: AuthLogin = yield call(requestHandler, action.payload)
    const { data } = yield call(requestHandler, {
      path: '/author/search',
      method: 'get',
      data: action.payload
    })
    yield put(getSearchAuthor.success(data))
  } catch (e) {
    console.log(e);
    // yield put(postAuthLoginAsync.failure(e))
  }

  yield put(actions.getSearchAuthor());
  // yield push(routes.DASHBOARD); // if necessary redirect via push action provided by redux-saga
}

export default all([
  takeLatest(types.GET_SEARCH_AUTHOR, getSearchAuthor),
]);