import {
  basicRegistry
} from "../utils/stateHelpers";
import * as formManager from "../templates/formManager/formManagerReducer";

const origin = {
  ...formManager.state,
  goLogIn: false,
  redirectToHome: false
}

const registry = {
  ...basicRegistry,
  ...formManager.registry,
}

const registerReducer = (state = origin, action) => {
  if (!action.namespace || action.namespace !== "register") return state;

  const handler = registry[action.type];
  if (!handler) return state;

  return handler(state, action)
}

export default registerReducer;
