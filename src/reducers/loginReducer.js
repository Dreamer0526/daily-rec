import {
  basicRegistry
} from "../utils/stateHelpers";
import * as formManager from "../templates/formManager/formManagerReducer";

const origin = {
  ...formManager.state
}

const registry = {
  ...basicRegistry,
  ...formManager.registry,
}

const loginReducer = (state = origin, action) => {
  if (!action.namespace || action.namespace !== "login") return state;

  const handler = registry[action.type];
  if (!handler) return state;

  return handler(state, action)
}

export default loginReducer;
