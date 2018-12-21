import {
  username
} from "../../metadata/fields/name";
import {
  password
} from "../../metadata/fields/passwords";
import {
  submit
} from "../../metadata/fields/buttons";

const loginFields = {
  username,
  password,
  submit: { ...submit,
    label: "Login"
  }
};

export default loginFields;
