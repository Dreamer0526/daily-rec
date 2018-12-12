export const checkWarning = ({
  validation,
  value
}) => (validation.required && !value) ? ["This is a required field"] : null;

export const checkError = ({
  validation,
  value
}) => {
  const {
    specs
  } = validation;
  if (!specs) return;

  const desc = [];

  specs.forEach(spec => {
    switch (spec.type) {
      case "minLength":
        const length = checkMinLength({ ...spec,
          value
        })
        if (length) desc.push(length);
        break;

      case "regex":
        const regex = checkRegex({ ...spec,
          value
        })
        if (regex) desc.push(regex);
        break;

      default:
        break;
    }
  });

  return desc.length ? desc : null;
}

const checkMinLength = ({
  rule,
  value,
  desc
}) => (!value || value.length < rule) ? desc : null;

const checkRegex = ({
  rule,
  value,
  desc
}) => {
  const pattern = new RegExp(rule);
  const result = pattern.test(value);
  return !result ? desc : null;
}
