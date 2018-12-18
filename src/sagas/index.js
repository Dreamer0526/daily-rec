import {
  all
} from "redux-saga/effects";

import authSagas from "./authSagas"
import tokenSagas from "./tokenSagas";
import profileSagas from "./profileSagas";
import recordSagas from "./recordSagas";

export default function* rootSaga() {
  yield all([
    ...authSagas,
    ...tokenSagas,
    ...profileSagas,
    ...recordSagas
  ])
};
