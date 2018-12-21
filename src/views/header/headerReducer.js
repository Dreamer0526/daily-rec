import {
  basicRegistry,
  isActionInNamespace
} from "../../utils/reduxHelpers";

const NAMESPACE = "header";

export const origin = {
  authentication: {}
};

const registry = {
  ...basicRegistry,
  "SET_ORIGIN": (state, action) => origin
};

const headerReducer = (state = origin, action) => {
  if (!isActionInNamespace(action, NAMESPACE)) {
    return state;
  }

  const handler = registry[action.type];
  if (!handler) return state;

  return handler(state, action);
}

export default headerReducer;
