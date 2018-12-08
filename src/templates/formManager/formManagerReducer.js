import {
  SET_STATE,
  REPLACE_STATE
} from "../../metadata/actionType";
import {
  setObjectValueByPath
} from "../../utils/objects";

const origin = {
  alert: {
    type: "",
    desc: ""
  },
  fields: {},
  valid: false
};

function setState(prevState, diffState) {
  let nextState = prevState;

  for (const key in diffState) {
    const value = diffState[key];
    nextState = setObjectValueByPath(nextState, key, value);
  }

  return nextState;
}

const updatePristine = (state, name) => ({
  ...state,
  fields: {
    ...state.fields,
    [name]: {
      ...state.fields[name],
      pristine: false
    }
  }
});

const updateFormValue = (state, payload) => {
  const {
    fields
  } = state;

  let modified = fields;

  Object.keys(fields).forEach(fieldName => {
    const originField = fields[fieldName];
    const value = payload[fieldName];

    modified[fieldName] = {
      ...originField,
      value,
      desc: value ? "" : "This is a required field"
    };
  });

  const valid = Object.keys(state.fields).every(name => {
    const {
      pristine,
      value,
      desc
    } = modified[name];
    return !pristine && value && !desc;
  });

  return {
    ...state,
    alert: {},
    fields: modified,
    valid
  };
};

const reducer = (state = origin, action) => {
  switch (action.type) {
    case "validate_form":
      return updateFormValue(state, action.payload);

    case SET_STATE:
      return setState(state, action.state);

    case REPLACE_STATE:
      return action.state;

    default:
      return state;
  }
};

export default reducer;
