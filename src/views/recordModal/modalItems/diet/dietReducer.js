import {
  basicRegistry,
  isActionInNamespace
} from "../../../../utils/reduxHelpers";
import formRegistry from "../../../../redux/shared/formManagerReducer";

const NAMESPACE = "records.diet";

const origin = {
  stagedForm: {}
};

const registry = {
  ...basicRegistry,
  ...formRegistry
};

const dietReducer = (state = origin, action) => {
  if (!isActionInNamespace(action, NAMESPACE)) {
    return state;
  }

  const handler = registry[action.type];
  if (!handler) return state;

  return handler(state, action);
};

export default dietReducer;
