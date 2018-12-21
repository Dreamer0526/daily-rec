import {
  put,
  select,
  takeLatest
} from "redux-saga/effects";

function* validateForm(namespace, payload) {
  yield put({
    namespace,
    type: "validate_form",
    payload
  });

  const valid = yield select(state => {
    const statePaths = namespace.split(".");

    let result = state;
    statePaths.forEach(path => {
      result = result[path];
    });

    return result.valid;
  });

  return valid;
}

function* submitForm(action) {
  const {
    namespace,
    payload
  } = action;

  const result = yield validateForm(namespace, payload);
  if (!result) return;

  switch (namespace) {
    case "login":
      yield put({
        type: "saga_login",
        namespace,
        payload
      })
      break;

    case "register":
      yield put({
        type: "saga_register",
        namespace,
        payload
      })
      break;

    case "records.diet":
    case "records.sports":
      yield put({
        desc: "Stage records",
        type: "SET_STATE",
        namespace,
        state: {
          stagedForm: payload.form
        }
      });
      break;

    default:
      break;
  }
}

const authSagas = [
  takeLatest("saga_submit", submitForm),
];

export default authSagas;
