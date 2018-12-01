import registerFields from "../fields/registerFields";

const origin = {
  alert: {
    type: "",
    desc: ""
  },
  fields: registerFields,
  valid: false
};

const updatePristine = (state, name) => ({
  ...state,
  fields: {
    ...state.fields,
    [name]: {
      ...state.fields[name],
      pristine: false
    }
  }
})

const updateFormValue = (state, payload) => {
  const {
    username,
    password
  } = payload;

  const {
    fields
  } = state;

  const modified = {
    ...fields,
    username: {
      ...fields.username,
      value: username,
      desc: username ? "" : "This is a required field"
    },
    password: {
      ...fields.password,
      value: password,
      desc: password ? "" : "This is a required field"
    }
  };

  const valid = Object.keys(state.fields).every(name => {
    const {
      pristine,
      value,
      desc
    } = modified[name];
    return !pristine && value && !desc;
  })

  return {
    ...state,
    alert: {},
    fields: modified,
    valid
  };
}

const reducer = (state = origin, action) => {
  const {
    type
  } = action;

  switch (type) {
    case "update_field_pristine":
      return updatePristine(state, action.name);

    case "clear_alert":
      return {
        ...state,
        alert: {}
      };

    case "validate_register_form":
      return updateFormValue(state, action.payload);

    case "register_success":
      return {
        ...state,
        alert: {
          desc: "Register success!",
          type: "success"
        },
        valid: false
      };

    case "register_error":
      return {
        ...state,
        alert: {
          desc: "User name is used",
          type: "warning"
        },
        valid: false
      };

    default:
      return state;
  }
}

export default reducer;
