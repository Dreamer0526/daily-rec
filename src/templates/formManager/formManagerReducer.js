const origin = {
  alert: {
    type: "",
    desc: ""
  },
  fields: {},
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
    fields
  } = state;

  let modified = fields;

  Object.keys(fields).forEach(fieldName => {
    const originField = fields[fieldName];
    const value = payload[fieldName];

    modified[fieldName] = {
      ...originField,
      value,
      desc: value ? "" : "This is a required field"
    }
  })

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
  switch (action.type) {
    case "init_fields":
      return {
        ...state,
        fields: action.fields
      }

    case "update_pristine":
      return updatePristine(state, action.name);

    case "clear_alert":
      return {
        ...state,
        alert: {}
      };

    case "validate_register_form":
      return updateFormValue(state, action.payload);

    case "submit_response":
      return {
        ...state,
        alert: {
          desc: action.response.message,
          type: action.response.type
        },
        valid: false
      };

    case "submit_error":
      return {
        ...state,
        alert: {
          desc: "Unknow error occurred",
          type: "danger"
        },
        valid: false
      };

    default:
      return state;
  }
}

export default reducer;
