export const state = {
  alert: {
    type: "",
    desc: ""
  },
  fields: {},
  valid: false
};

const validateForm = (fields) => {
  const fieldList = Object.keys(fields);
  
  return fieldList.every(name => {
    const field = fields[name];
    const {
      validation,
      pristine,
      value,
      desc
    } = field;

    if(!validation) return true;

    const {required} = validation;

    return !required || (!pristine && value && !desc);
  });
}

const validateField = (field) => {
  const { value, validation } = field;
  if(!validation) return field;


  return {
    ...field,
    desc: validation.required && !value ? "This is a required field" : ""
  };
}

const updateFormValue = (state, payload) => {
  const {
    fields
  } = state;

  const modified = {}

  Object.keys(fields).forEach(name => {
    const value = payload[name];
    const field = {
      ...fields[name], 
      value
    };
    
    Object.defineProperty(modified, name, {
      value: validateField(field), 
      enumerable: true
    });
  });

  const valid = validateForm(modified);

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
