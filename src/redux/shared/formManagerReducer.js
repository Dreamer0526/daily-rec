import {
  validateField
} from "../../utils/dictionary";

export default {
  "validate_form": (state, action) => updateForm(state, action.payload)
}

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
 * @param {Object} fields 
 * @param {Object} validation origin field validation
 * @returns {Object} validation after updating reference
 */
const updateReference = (fields, validation) => {
  const {
    specs
  } = validation;

  if (!specs) return validation;

  let modified = specs.map(spec => {
    if (spec.rule === "equal") {
      const targetValue = fields[spec.target].value
      return {
        ...spec,
        targetValue
      }
    }

    return spec;
  })

  return {
    ...validation,
    specs: modified
  }
}

const updateForm = (state, payload) => {
  let {
    form,
    fields
  } = payload;
  const fieldList = Object.keys(fields);

  // loop thru and update field value
  fieldList.forEach(name => {
    const field = fields[name];
    const value = form[name];

    fields[name] = {
      ...field,
      value
    };
  });

  // loop thru and update validation reference
  fieldList.forEach(name => {
    const field = fields[name];

    const {
      validation
    } = field;
    if (!validation) return

    fields[name] = {
      ...field,
      validation: updateReference(fields, validation)
    }
  });

  // loop thru and validate field
  fieldList.forEach(name => {
    const field = fields[name];

    fields[name] = {
      ...field,
      desc: validateField(field)
    }
  });

  const valid = validateForm(fields);

  return {
    ...state,
    alert: {},
    fields,
    valid
  };
};
