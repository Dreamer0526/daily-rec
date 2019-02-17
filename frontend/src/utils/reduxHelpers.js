/**
 * @method setState
 * @param {Object} prevState 
 * @param {Object} diffState 
 * @returns {Object} next state
 */
export function setState(prevState, diffState) {
  let nextState = prevState;

  for (const key in diffState) {
    const value = diffState[key];
    nextState = setObjectValueByPath(nextState, key, value);
  }

  return nextState;
}

export const basicRegistry = {
  "SET_STATE": (state, action) => setState(state, action.state),
  "REPLACE_STATE": (state, action) => action.state
}

/**
 * @method setObjectValueByPath
 * @desc This function sets a named key in an object
 * @param {Object} object Object to be modified
 * @param {String} key A string that states the path, e.g. "fields.username.value"
 * @param {Any} value
 * @returns {Object} Modified object
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

export function isActionInNamespace(action, namespace) {
  return (action.namespace && (action.namespace === namespace || action.namespace.includes(namespace)));
}
