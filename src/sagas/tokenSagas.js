import {
  put,
  takeLatest,
} from "redux-saga/effects";
import {
  PathName
} from "../utils/locations";
import {
  redirectToLogin
} from "../utils/locations";
import withServices from "../services";
import authExcluded from "../config/authExcluded";

const {
  token
} = withServices("token");

function* verifyAuth() {
  try {
    const response = yield token.verify();

    yield put({
      namespace: "header",
      desc: "access token verified",
      type: "SET_STATE",
      state: {
        authentication: {
          ...response.data,
          authenticated: true
        }
      }
    });

  } catch (error) {
    if (!authExcluded.includes(PathName)) {
      redirectToLogin();
    }
  }
}

const tokenSagas = [
  takeLatest("saga_verify_auth", verifyAuth)
];

export default tokenSagas;
