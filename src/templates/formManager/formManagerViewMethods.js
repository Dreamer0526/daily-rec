import {
  init_fields,
  clear_alert,
  update_pristine,
  send_submit_request,
} from "./formManagerActions";

export const map_state_to_props = (state, subState) => ({
  alert: state[subState].form.alert,
  fields: state[subState].form.fields,
  valid: state[subState].form.valid
});

export const map_dispatch_to_props = (dispatch, subState, fields, submitService) => {
  return {
    initFields: () => dispatch(init_fields(fields)),
    onFocus: name => dispatch(update_pristine(name)),
    onSubmit: payload => dispatch(send_submit_request(subState, submitService, payload)),
    onClearAlert: () => dispatch(clear_alert())
  }
}
