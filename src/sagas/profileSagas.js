import {
  put,
  takeEvery
} from "redux-saga/effects";
import withServices from "../services";

const {
  profile
} = withServices("profile");

function* fetchSettings() {
  try {
    const response = yield profile.fetchSettings();

    const settings = response.data;
    delete settings.username;
    delete settings._id;

    yield put({
      namespace: "profile",
      desc: "fetch settings response",
      type: "SET_STATE",
      state: {
        settings
      }
    });

  } catch (error) {
    yield put({
      namespace: "profile",
      desc: "fetch settings error",
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

function* patchSettings(action) {
  console.log(action.payload)
}

const profileSagas = [
  takeEvery("saga_fetch_settings", fetchSettings),
  takeEvery("saga_patch_settings", patchSettings)
];

export default profileSagas;
