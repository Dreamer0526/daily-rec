import {
  put,
  select,
  takeEvery
} from "redux-saga/effects";
import withServices from "../services";

const {
  records
} = withServices("records");

function* fetchRecords() {
  try {
    const response = yield records.fetchRecords();
    console.log(response.data)

  } catch (error) {
    // yield put({
    //   namespace: "records",
    //   type: "SET_STATE",
    //   desc: "Patch records failed",
    //   state: {
    //     patchResponse: "failure"
    //   }
    // });
  }
}

function* getStagedForm() {
  return yield select(state => {
    const {
      records
    } = state;

    let form = {};
    Object.keys(records).forEach(key => {
      const {
        stagedForm
      } = records[key];
      if (stagedForm) {
        form[key] = stagedForm;
      }
    });

    return form;
  });
}

function* patchRecords() {
  const form = yield getStagedForm();

  try {
    yield records.patchRecords(form);

    yield put({
      namespace: "records.finished",
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
  takeEvery("saga_fetch_records", fetchRecords),
  takeEvery("saga_patch_records", patchRecords)
];

export default recordSagas;
