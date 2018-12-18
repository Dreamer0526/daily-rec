import {
  put,
  takeEvery
} from "redux-saga/effects";
import actions from "../actions";
// import withServices from "../services";

// const {
//   profile
// } = withServices("profile");


function* patchRecord(action) {
  const {
    payload,
    namespace
  } = action;

  try {
    console.log(payload);


  } catch (error) {
    yield put(actions.set_error_message(namespace));
  }
}

const recordSagas = [
  takeEvery("saga_patch_record", patchRecord)
];

export default recordSagas;
