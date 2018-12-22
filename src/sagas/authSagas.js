import {
  put,
  takeLatest
} from "redux-saga/effects";
import {
  redirectToHome
} from "../utils/locations";
import {
  actions
} from "../redux";
import withServices from "../services";

const {
  auth
} = withServices("auth");

function* login(action) {
  const {
    namespace,
    payload
  } = action;

  try {
    const response = yield auth.login(payload.form);

    if (response.data.type === "success") {
      localStorage.setItem("access_token", response.data.access_token);

      yield put({
        type: "saga_verify_auth"
      });

      redirectToHome();

    } else {
      const alert = {
        desc: response.data.message,
        type: response.data.type
      };

      yield put(actions.set_error_message(namespace, alert));
    }

  } catch (error) {
    yield put(actions.set_error_message(namespace));
  }
}

function* register(action) {
  const {
    namespace,
    payload
  } = action;

  const {
    form
  } = payload;

  try {
    const response = yield auth.register(form);

    if (response.data.type === "success") {
      yield login({
        payload
      });

    } else {
      const alert = {
        desc: response.data.message,
        type: response.data.type
      };

      yield put(actions.set_error_message(namespace, alert));
    }

  } catch (error) {
    yield put(actions.set_error_message(namespace));
  }
}


const authSagas = [
  takeLatest("saga_register", register),
  takeLatest("saga_login", login)
];

export default authSagas;
