import {
  email
} from "./base/email";
import {
  username
} from "./base/name";
import {
  label
} from "./base/label";

const loginFields = {
  label1: {
    ...label,
    text: "User Info"
  },
  username,
  email,
  label2: {
    ...label,
    text: "Settings"
  },
};

export default loginFields;
