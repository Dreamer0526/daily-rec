import {
  username
} from "./base/name";
import {
  password
} from "./base/passwords";
import {
  submit
} from "./base/buttons";

const loginFields = {
  username,
  password,
  submit: { ...submit,
    label: "Login"
  }
};

export default loginFields;
