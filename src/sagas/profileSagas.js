import {
  put,
  takeEvery
} from "redux-saga/effects";
import withServices from "../services";

const {
  profile
} = withServices("profile");

function* fetchSetting() {
  try {
    const response = yield profile.fetchSetting();

    yield put({
      namespace: "profile",
      desc: "fetch setting response",
      type: "SET_STATE",
      state: {
        setting: response.data
      }
    });

  } catch (error) {
    console.log("eror");
    // yield put({
    //   namespace: "profile",
    //   desc: "fetch setting error",
    //   type: "SET_STATE",
    //   state: {
    //     alert: {
    //       desc: "Unknow error happened",
    //       type: "danger"
    //     }
    //   }
    // });
  }
}

const profileSagas = [
  takeEvery("saga_fetch_setting", fetchSetting)
];

export default profileSagas;
