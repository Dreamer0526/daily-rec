export function isEqual(obj1, obj2) {
  const isObj1Empty = !Object.keys(obj1).length;
  const isObj2Empty = !Object.keys(obj2).length;

  if (isObj1Empty && !isObj2Empty) return false;

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
