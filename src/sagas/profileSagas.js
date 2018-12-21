import {
  put,
  takeEvery
} from "redux-saga/effects";
import {
  actions
} from "../reducers";
import withServices from "../services";

const {
  profile
} = withServices("profile");

function* fetchSettings() {
  try {
    const response = yield profile.fetchSettings();
    const settings = response.data;

    yield put({
      namespace: "profile",
      desc: "fetch settings response",
      type: "SET_STATE",
      state: {
        settings
      }
    });

  } catch (error) {
    yield put(actions.set_error_message("profile"));

  }
}

function* patchSettings(action) {
  const {
    form
  } = action.payload;

  try {
    const response = yield profile.patchSettings(form);
    const settings = response.data;

    yield put({
      namespace: "profile",
      desc: "patch settings response",
      type: "SET_STATE",
      state: {
        settings
      }
    });

    yield put(actions.set_success_message("profile"));

  } catch (error) {
    yield put(actions.set_error_message("profile"));
  }
}

const profileSagas = [
  takeEvery("saga_fetch_settings", fetchSettings),
  takeEvery("saga_patch_settings", patchSettings)
];

export default profileSagas;
