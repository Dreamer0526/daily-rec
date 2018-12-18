export function isEqual(obj1, obj2) {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;

  if (isEmpty(obj1) && !isEmpty(2)) return false;

  for (const key in obj1) {
    if (!isValidValue(obj2[key])) return false;

    if (typeof obj1[key] === "object") {
      return isEqual(obj1[key], obj2[key]);
    }

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

function isValidValue(value) {
  const validTypes = ["string", "boolean", "number", "object"];
  return validTypes.includes(typeof value);
}

export function isEmpty(obj) {
  return !Object.keys(obj).length;
}
