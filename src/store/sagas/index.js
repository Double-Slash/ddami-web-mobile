import {all} from 'redux-saga/effects';
import search from "./searchSaga";

export default function* rootSaga() {
  yield all([
    search,
  ]);
}