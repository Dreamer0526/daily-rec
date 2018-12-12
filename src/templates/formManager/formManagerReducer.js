import {
  checkWarning,
  checkError
} from "../../utils/dictionary";

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
      desc
    } = field;

    return !validation || !desc || !desc.length;
  });
}

/**
 * @param {Object} field 
 * @returns {Array} Information of validation result. Empty array as valid.
 */
const validateField = (field) => {
  if (!field.validation) return [];

  const warning = checkWarning(field);
  if (warning) return warning;

  const error = checkError(field);
  if (error) return error;

  return [];
}

const updateForm = (state, payload) => {
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


    // update reference
    const {
      validation = {}
    } = field
    const {
      specs = []
    } = validation
    specs.forEach(spec => {
      if (spec.rule === "equal") {
        console.log("update reference for", name)
      }
    })

    const validationInfo = validateField(field);

    Object.defineProperty(modified, name, {
      value: {
        ...field,
        desc: validationInfo
      },
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
  "validate_form": (state, action) => updateForm(state, action.payload)
}
