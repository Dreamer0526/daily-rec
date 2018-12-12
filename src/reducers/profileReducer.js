import {
  basicRegistry,
  isActionInNamespace
} from "../utils/reduxHelpers";

const NAMESPACE = "profile";

const origin = {
  username: "",
  email: "",
  setting: {}
};

const registry = {
  ...basicRegistry,
};

const profileReducer = (state = origin, action) => {
  if (!isActionInNamespace(action, NAMESPACE)) {
    return state;
  }

  const handler = registry[action.type];
  if (!handler) return state;

  return handler(state, action);
}

export default profileReducer;
