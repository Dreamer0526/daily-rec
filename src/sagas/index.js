import {
  all
} from "redux-saga/effects";

import authSagas from "./authSagas"
import tokenSagas from "./tokenSagas";
import profileSagas from "./profileSagas";

export default function* rootSaga() {
  yield all([
    ...authSagas,
    ...tokenSagas,
    ...profileSagas
  ])
};
