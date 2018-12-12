/**
 * @param {Object} field 
 * @returns {Array} Information of validation result. Empty array as valid.
 */
export const validateField = (field) => {
  if (!field.validation) return [];

  const warning = checkWarning(field);
  if (warning) return warning;

  const error = checkError(field);
  if (error) return error;

  return [];
}

const checkWarning = ({
  validation,
  value
}) => (validation.required && !value) ? ["This is a required field"] : null;

const checkError = ({
  validation,
  value
}) => {
  const {
    specs
  } = validation;
  if (!specs) return;

  const desc = [];

  specs.forEach(spec => {
    const handler = HANDLER_REGISTRY[spec.rule];
    if (!handler) return;

    const result = handler({ ...spec,
      value
    });
    if (result) desc.push(result);
  });

  return desc.length ? desc : null;
}

const HANDLER_REGISTRY = {
  "length": checkLength,
  "minLength": checkMinLength,
  "maxLength": checkMaxLength,
  "regex": checkRegex,
  "equal": checkEqual
};

function checkLength({
  target,
  value,
  desc
}) {
  return (!value || value.length !== target) ? desc : null;
}

function checkMinLength({
  target,
  value,
  desc
}) {
  return (!value || value.length < target) ? desc : null;
}

function checkMaxLength({
  target,
  value,
  desc
}) {
  return (!value || value.length > target) ? desc : null;
}

function checkRegex({
  target,
  value,
  desc
}) {
  const pattern = new RegExp(target);
  const result = pattern.test(value);
  return !result ? desc : null;
}

function checkEqual({
  targetValue,
  value,
  desc
}) {
  return !targetValue || (value !== targetValue) ? desc : null;
}