import {all} from 'redux-saga/effects';
import search from "./searchSaga";
import workplace from "./workplaceSaga";
import work from './workSaga'
import shop from './shopSaga'

export default function* rootSaga() {
  yield all([
    search,
    workplace,
    work,
    shop
  ]);
}