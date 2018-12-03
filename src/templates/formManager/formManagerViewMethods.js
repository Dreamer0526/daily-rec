import {
  init_fields,
  clear_alert,
  update_pristine,
  send_submit_request,
} from "./formManagerActions";

export const stateBasedProps = (state, {
  subStateName
}) => ({
  alert: state[subStateName].form.alert,
  fields: state[subStateName].form.fields,
  valid: state[subStateName].form.valid
});

export const dispatchBasedProps = (dispatch, {
  subStateName,
  formFields,
  submitService
}) => ({
  initFields: () => dispatch(init_fields(formFields)),
  onFocus: name => dispatch(update_pristine(name)),
  onSubmit: payload => dispatch(send_submit_request(subStateName, submitService, payload)),
  onClearAlert: () => dispatch(clear_alert())
});
