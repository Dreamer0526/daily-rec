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

    const {
      username = "",
        exp = "",
        iat = "",
        email = ""
    } = response.data;

    yield put({
      namespace: "authentication",
      desc: "access token verified",
      type: "SET_STATE",
      state: {
        authenticated: true,
        username,
        expireAt: exp,
        issueAt: iat,
      }
    });

    yield put({
      namespace: "profile",
      desc: "fill in profile info",
      type: "SET_STATE",
      state: {
        info: {
          username,
          email,
        }
      }
    })

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
