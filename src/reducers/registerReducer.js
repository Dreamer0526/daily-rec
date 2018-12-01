const origin = {
  alert: "",
  username: {
    value: "",
    validation: ""
  },
  password: {
    value: "",
    validation: ""
  }
};

const reducer = (state = origin, action) => {
  const {
    type = "", payload = {}
  } = action;
  const {
    username,
    password
  } = payload;

  switch (type) {
    case "submit_register_form":
      return {
        ...state,
        username: {
          ...state.username,
          value: username,
        },
        password: {
          ...state.password,
          value: password
        }
      }

    case "register_error":
      return {
        ...state,
        alert: "User name is used"
      }

    default:
      return state;
  }
}

export default reducer;
