/**
 * @method setObjectValueByPath
 * @desc This function sets a named key in an object
 * @param {Object} object Object to be modified
 * @param {String} key A string that states the path, e.g. "fields.username.value"
 * @param {Any} value
 * @return {Object} Modified object
 */
export function setObjectValueByPath(object, key, value) {
  const recursiveSet = (object, chain, value) => {
    const key = chain.shift();

    if (!chain.length) return {
      [key]: value
    };

    const subObject = object[key];
    return {
      [key]: Object.assign({}, subObject, recursiveSet(subObject, chain, value))
    };
  };

  const chain = key.split(".");
  const modified = recursiveSet(object, chain, value);
  return Object.assign({}, object, modified);
}
