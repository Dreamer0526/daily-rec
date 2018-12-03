/**
 * @method init_fields
 * @param {Object} fields
 */
export const init_fields = fields => ({
  type: "init_fields",
  fields
});

/**
 * @method update_pristine
 * @param {String} name Field name to update
 */
export const update_pristine = name => ({
  type: "update_pristine",
  name
});

export const clear_alert = () => ({
  type: "clear_alert"
});

/**
 * @method validate_from
 * @param {Object} payload {username: String, password: String}
 */
export const validate_from = payload => ({
  type: "validate_register_form",
  payload
});

/**
 * @method send_submit_request
 * @param {Object} payload {username: String, password: String}
 */
export function send_submit_request(subState, submitRequest, payload) {
  return async (dispatch, getState) => {
    dispatch(validate_from(payload));

    const {
      valid = false
    } = getState()[subState].form;

    if (!valid) return;

    try {
      await submitRequest(payload);
      return dispatch({
        type: "submit_success"
      });

    } catch (error) {
      return dispatch({
        type: "submit_error"
      });
    }
  };
}
