import {all} from 'redux-saga/effects';
import search from "./searchSaga";
import workplace from "./workplaceSaga";
import work from './workSaga'

export default function* rootSaga() {
  yield all([
    search,
    workplace,
    work
  ]);
}