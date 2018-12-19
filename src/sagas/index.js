import {
  all
} from "redux-saga/effects";

import authSagas from "./authSagas"
import tokenSagas from "./tokenSagas";
import profileSagas from "./profileSagas";
import recordSagas from "./recordSagas";
import fromSagas from "./formSagas";

export default function* rootSaga() {
  yield all([
    ...authSagas,
    ...tokenSagas,
    ...profileSagas,
    ...recordSagas,
    ...fromSagas
  ])
};
