import {
  init_fields,
  clear_alert,
  update_pristine,
  send_submit_request,
} from "./formManagerActions";

export const mapStateToProps = (state, {
  namespace
}) => ({
  alert: state[namespace].alert,
  fields: state[namespace].fields,
  valid: state[namespace].valid
});

export const mapDispatchToProps = (dispatch, {
  namespace,
  formFields,
  submitService
}) => ({
  initFields: () => dispatch(init_fields(namespace, formFields)),
  onFocus: name => dispatch(update_pristine(namespace, name)),
  onSubmit: payload => dispatch(send_submit_request(namespace, submitService, payload)),
  onClearAlert: () => dispatch(clear_alert(namespace))
});
