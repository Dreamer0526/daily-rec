import fields from "../../metadata/fields";
const {
  username,
  password,
  submit
} = fields

const loginFields = {
  username,
  password,
  submit: { ...submit,
    label: "Login"
  }
};

export default loginFields;
