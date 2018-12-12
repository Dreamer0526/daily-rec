import {
  basicRegistry,
  isActionInNamespace
} from "../utils/reduxHelpers";

const NAMESPACE = "authentication";

export const origin = {
  authenticated: false,
  username: "",
  expireAt: null,
  issueAt: null,
};

const registry = {
  ...basicRegistry
};

const authenticationReducer = (state = origin, action) => {
  if (!isActionInNamespace(action, NAMESPACE)) {
    return state;
  }

  const handler = registry[action.type];
  if (!handler) return state;

  return handler(state, action);
}

export default authenticationReducer;