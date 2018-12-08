import {
  SET_STATE,
  REPLACE_STATE
} from "../../metadata/actionType"

/**
 * @method init_fields
 * @param {Object} fields
 */
export const init_fields = fields => ({
  desc: "Init fields",
  type: SET_STATE,
  state: {
    fields
  }
});

/**
 * @method update_pristine
 * @param {String} name Field name to update
 */
export const update_pristine = name => ({
  desc: "Update pristine",
  type: SET_STATE,
  state: {
    [`fields.${name}.pristine`]: false
  }
});

export const clear_alert = () => ({
  desc: "Clear alert",
  type: SET_STATE,
  state: {
    "alert": {}
  }
});

/**
 * @method validate_from
 * @param {Object} payload {username: String, password: String}
 */
export const validate_from = payload => ({
  type: "validate_form",
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
      const response = await submitRequest(payload);

      return dispatch({
        desc: "Submit response",
        type: SET_STATE,
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
        desc: "Submit error",
        type: SET_STATE,
        state: {
          alert: {
            type: "danger",
            desc: "Unknow error occureed"
          },
          valid: false
        }
      });
    }
  };
}
