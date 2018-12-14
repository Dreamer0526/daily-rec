import {
  put,
  select,
  takeLatest
} from "redux-saga/effects";
import {
  redirectToHome
} from "../utils/locations";
import actions from "../actions";
import withServices from "../services";

const {
  auth
} = withServices("auth");


function* validateForm(namespace, payload) {
  yield put({
    namespace,
    type: "validate_form",
    payload
  });

  const valid = yield select(state => state[namespace].valid);
  return valid;
}

function* login(action) {
  const {
    namespace,
    payload
  } = action;

  const result = yield validateForm(namespace, payload);
  if (!result) return;

  try {
    const response = yield auth.login(payload);

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

  const result = yield validateForm(namespace, payload);
  if (!result) return;

  try {
    const response = yield auth.register(payload);

    const alert = {
      desc: response.data.message,
      type: response.data.type
    };

    yield put(actions.set_error_message(namespace, alert));

  } catch (error) {
    yield put(actions.set_error_message(namespace));
  }
}

const authSagas = [
  takeLatest("saga_login", login),
  takeLatest("saga_register", register)
];

export default authSagas;
