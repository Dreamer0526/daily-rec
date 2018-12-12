const HANDLER_REGISTRY = {
  "length": checkLength,
  "minLength": checkMinLength,
  "maxLength": checkMaxLength,
  "regex": checkRegex,
  "equal": checkEqual
}

export function checkWarning({
  validation,
  value
}) {
  return (validation.required && !value) ? ["This is a required field"] : null;
}

export function checkError({
  validation,
  value
}) {
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
  target,
  value,
  desc
}) {
  return desc
}
