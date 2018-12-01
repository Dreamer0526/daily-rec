const origin = {
  alert: {
    type: "",
    desc: ""
  },
  fields: {
    desc: {
      username: "",
      password: ""
    },
    pristine: {
      username: true,
      password: true
    },
    value: {
      username: "",
      password: ""
    }
  },
  valid: false
};

const updatePristine = (state, name) => ({
  ...state,
  fields: {
    ...state.fields,
    pristine: {
      ...state.fields.pristine,
      [name]: false
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
    value: {
      ...fields.value,
      username,
      password
    },
    desc: {
      ...fields.desc,
      username: username ? "" : "This is a required field",
      password: password ? "" : "This is a required field"
    }
  };

  const {
    pristine,
    value,
    desc
  } = modified;
  const valid = Object.keys(payload).every(name => !pristine[name] && value[name] && !desc[name])

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

    case "validate_register_form":
      return updateFormValue(state, action.payload);

    case "register_success":
      return {
        ...state,
        alert: {
          desc: "Register sucess",
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
