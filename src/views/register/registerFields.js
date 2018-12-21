import {
  email
} from "../../metadata/fields/email";
import {
  username
} from "../../metadata/fields/name";
import {
  password,
  confirmPassword
} from "../../metadata/fields/passwords";
import {
  submit
} from "../../metadata/fields/buttons";

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
