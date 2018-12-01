import {
  register
} from "../services/authServices";

/**
 * @method updatePristine
 * @param {String} name Field name to update
 */
export const updatePristine = name => ({
  type: "update_field_pristine",
  name
})

/**
 * @method validateRegisterFrom
 * @param {Object} payload {username: String, password: String}
 */
export const validateRegisterFrom = payload => ({
  type: "validate_register_form",
  payload
});

/**
 * @method sendRegisterRequest
 * @param {Object} payload {username: String, password: String}
 */
export function sendRegisterRequest(payload) {
  return async (dispatch, getState) => {
    dispatch(validateRegisterFrom(payload));

    const {
      valid = false
    } = getState().register;

    if (!valid) return;

    try {
      await register(payload);
      return dispatch({
        type: "register_success"
      });

    } catch (error) {
      return dispatch({
        type: "register_error"
      });
    }
  };
}
