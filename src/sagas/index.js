import {
  all
} from "redux-saga/effects";
import authSagas from "./authSagas"
import tokenSagas from "./tokenSagas";

export default function* rootSaga() {
  yield all([
    ...authSagas,
    ...tokenSagas,
  ])
};