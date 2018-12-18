import {
  basicRegistry,
  isActionInNamespace
} from "../utils/reduxHelpers";
import * as formManager from "../templates/formManager/formManagerReducer";

const NAMESPACE = "dietModal";

const origin = {
  ...formManager.state
};

const registry = {
  ...basicRegistry,
  ...formManager.registry,
};

const dietReducer = (state = origin, action) => {
  if (!isActionInNamespace(action, NAMESPACE)) {
    return state;
  }

  const handler = registry[action.type];
  if (!handler) return state;

  return handler(state, action);
}

export default dietReducer;
