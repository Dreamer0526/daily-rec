import fields from "../../metadata/fields";
const {
  email,
  username,
  password,
  confirmPassword,
  submit
} = fields;

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
