/**
 * @method init_fields
 * @param {Object} fields
 */
export const init_fields = (namespace, fields) => ({
  namespace,
  desc: "Init fields",
  type: "SET_STATE",
  state: {
    fields
  }
});

/**
 * @method update_pristine
 * @param {String} name Field name to update
 */
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
    "alert": {}
  }
});

/**
 * @method validate_from
 * @param {Object} payload {username: String, password: String}
 */
export const validate_from = (namespace, payload) => ({
  namespace,
  type: "validate_form",
  payload
});

/**
 * @method send_submit_request
 * @param {Object} payload {username: String, password: String}
 */
export function send_submit_request(namespace, submitRequest, payload) {
  return async (dispatch, getState) => {
    dispatch(validate_from(namespace, payload));

    const {
      valid = false
    } = getState()[namespace];

    if (!valid) return;

    try {
      const response = await submitRequest(payload);
      localStorage.setItem("access_token", response.data.access_token);

      return dispatch({
        namespace,
        desc: "Submit response",
        type: "SET_STATE",
        state: {
          alert: {
            desc: response.data.message,
            type: response.data.type
          },
          valid: false
        }
      });

    } catch (error) {
      return dispatch({
        namespace,
        desc: "Submit error",
        type: "SET_STATE",
        state: {
          alert: {
            type: "danger",
            desc: "Unknow error occurred"
          },
          valid: false
        }
      });
    }
  };
}
