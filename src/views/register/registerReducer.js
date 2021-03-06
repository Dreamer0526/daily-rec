import {
  basicRegistry,
  isActionInNamespace
} from "../../utils/reduxHelpers";
import formRegistry from "../../redux/shared/formManagerReducer";

const NAMESPACE = "register";

const origin = {};

const registry = {
  ...basicRegistry,
  ...formRegistry
};

const registerReducer = (state = origin, action) => {
  if (!isActionInNamespace(action, NAMESPACE)) {
    return state;
  }

  const handler = registry[action.type];
  if (!handler) return state;

  return handler(state, action);
}

export default registerReducer;
