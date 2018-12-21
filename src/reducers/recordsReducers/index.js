import {
  combineReducers
} from "redux";
import {
  basicRegistry,
  isActionInNamespace
} from "../../utils/reduxHelpers";
import diet from "./dietReducer";
import sports from "./sportsReducer";

const NAMESPACE = "records";

const origin = {
  patchResponse: null
};

const registry = {
  ...basicRegistry
};

const reducer = (state = origin, action) => {
  if (!isActionInNamespace(action, NAMESPACE)) {
    return state;
  }

  const handler = registry[action.type];
  if (!handler) return state;

  return handler(state, action);
}

const reducers = combineReducers({
  diet,
  sports,
  responses: reducer,
});

export default reducers;
