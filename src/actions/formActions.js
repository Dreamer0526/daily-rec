export const init_fields = (namespace, fields) => ({
  namespace,
  desc: "Init fields",
  type: "SET_STATE",
  state: {
    fields
  }
});

export const clear_alert = (namespace) => ({
  namespace,
  desc: "Clear alert",
  type: "SET_STATE",
  state: {
    "alert.desc": "",
    "alert.type": ""
  }
});

const GENERAL_ERROR_ALERT = {
  type: "danger",
  desc: "Unkown error occurred"
}

const GENERAL_ERROR_DESC = "response error"

export const set_error_message = (namespace, alert = GENERAL_ERROR_ALERT, desc = GENERAL_ERROR_DESC) => ({
  namespace,
  desc,
  type: "SET_STATE",
  state: {
    alert
  }
});

const GENERAL_SUCCESS_ALERT = {
  type: "success",
  desc: "Operation succeeds"
}
const GENERAL_SUCCESS_DESC = "response success"

export const set_success_message = (namespace, alert = GENERAL_SUCCESS_ALERT, desc = GENERAL_SUCCESS_DESC) => ({
  namespace,
  desc,
  type: "SET_STATE",
  state: {
    alert
  }
});
