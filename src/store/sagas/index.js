import {all} from 'redux-saga/effects';
import search from "./searchSaga";
import workplace from "./workplaceSaga";

export default function* rootSaga() {
  yield all([
    search,
    workplace
  ]);
}