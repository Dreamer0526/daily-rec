import {
  email
} from "../../metadata/fields/email";
import {
  username
} from "../../metadata/fields/name";
import {
  label
} from "../../metadata/fields/label";
import {
  submit
} from "../../metadata/fields/buttons";

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
