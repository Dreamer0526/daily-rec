import {
  put,
  select,
  takeLatest
} from "redux-saga/effects";
import {
  redirectToHome
} from "../utils/locations";
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
      yield put({
        namespace,
        desc: "login response",
        type: "SET_STATE",
        state: {
          alert: {
            desc: response.data.message,
            type: response.data.type
          }
        }
      });
    }

  } catch (error) {
    yield put({
      namespace,
      type: "SET_STATE",
      state: {
        alert: {
          desc: "Unknow error happened",
          type: "danger"
        }
      }
    });
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

    yield put({
      namespace,
      desc: "register response",
      type: "SET_STATE",
      state: {
        alert: {
          desc: response.data.message,
          type: response.data.type
        }
      }
    });

  } catch (error) {
    yield put({
      namespace,
      type: "SET_STATE",
      state: {
        alert: {
          desc: "Unknow error happened",
          type: "danger"
        }
      }
    });
  }
}

const authSagas = [
  takeLatest("saga_login", login),
  takeLatest("saga_register", register)
];

export default authSagas;
