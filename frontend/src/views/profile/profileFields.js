import fields from "../../metadata/fields";
const {
  email,
  username,
  label,
  submit
} = fields;

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
