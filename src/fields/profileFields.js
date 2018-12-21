import {
  email
} from "./base/email";
import {
  username
} from "./base/name";
import {
  label
} from "./base/label";
import {
  submit
} from "./base/buttons";

const loginFields = {
  label1: {
    ...label,
    text: "User Info"
  },
  username: {
    ...username,
    label: "User Name:",
    disabled: true
  },
  email: {
    ...email,
    label: "Email:",
    disabled: true
  },
  label2: {
    ...label,
    text: "Settings"
  },
  submit: {
    ...submit,
    label: "Update"
  }
};

export default loginFields;
