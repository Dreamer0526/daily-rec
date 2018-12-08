export const state = {
  alert: {
    type: "",
    desc: ""
  },
  fields: {},
  valid: false
};

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
    };
  });

  const valid = Object.keys(state.fields).every(name => {
    const {
      pristine,
      value,
      desc
    } = modified[name];
    return !pristine && value && !desc;
  });

  return {
    ...state,
    alert: {},
    fields: modified,
    valid
  };
};

export const registry = {
  "validate_form": (state, action) => updateFormValue(state, action.payload)
}
