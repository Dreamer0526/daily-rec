import {
  email
} from "./base/email";
import {
  username
} from "./base/name";
import {
  password,
  confirmPassword
} from "./base/passwords";
import {
  submit
} from "./base/buttons";

const loginFields = {
  email,
  username,
  password,
  confirmPassword,
  submit: {
    ...submit,
    label: "Register"
  }
};

export default loginFields;
