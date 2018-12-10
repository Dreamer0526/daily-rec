export const init_fields = (namespace, fields) => ({
  namespace,
  desc: "Init fields",
  type: "SET_STATE",
  state: {
    fields
  }
});

export const update_pristine = (namespace, name) => ({
  namespace,
  desc: "Update pristine",
  type: "SET_STATE",
  state: {
    [`fields.${name}.pristine`]: false
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