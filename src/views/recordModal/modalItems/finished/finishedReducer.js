import {
  basicRegistry,
  isActionInNamespace
} from "../../../../utils/reduxHelpers";

const NAMESPACE = "records.finished";

const origin = {
  patchResponse: null
};

const registry = {
  ...basicRegistry
};

const finishedReducer = (state = origin, action) => {
  if (!isActionInNamespace(action, NAMESPACE)) {
    return state;
  }

  const handler = registry[action.type];
  if (!handler) return state;

  return handler(state, action);
}

export default finishedReducer;
