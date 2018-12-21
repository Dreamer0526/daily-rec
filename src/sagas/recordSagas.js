import {
  put,
  select,
  takeEvery
} from "redux-saga/effects";
import withServices from "../services";

const {
  records
} = withServices("records");


function* patchRecords() {

  const form = yield select(state => {
    const {
      records
    } = state;

    let form = {};
    Object.keys(records).forEach(key => {
      form[key] = records[key].stagedForm
    });

    return form;
  });

  try {
    yield records.patchRecords(form);

    yield put({
      namespace: "records",
      type: "SET_STATE",
      desc: "Patch records success",
      state: {
        patchResponse: "success"
      }
    });

  } catch (error) {
    yield put({
      namespace: "records",
      type: "SET_STATE",
      desc: "Patch records failed",
      state: {
        patchResponse: "failure"
      }
    });
  }
}

const recordSagas = [
  takeEvery("saga_patch_records", patchRecords)
];

export default recordSagas;
