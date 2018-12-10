import {
  takeEvery,
  select,
  call,
  put
} from "redux-saga/effects";
import withServices from "../services";

function* saga() {
  yield takeEvery('verify_token', verify_auth_saga)
}



function* verify_auth_saga() {
  const {
    token
  } = withServices("token");

  try {
    const response = yield token.verify();
    yield put({
      namespace: "authentication",
      desc: "access token verified",
      type: "SET_STATE",
      state: {
        authenticated: true,
        username: response.data.username,
        expireAt: response.data.exp,
        issueAt: response.data.iat,
      }
    });
  } catch (error) {

  }
}

export default saga
