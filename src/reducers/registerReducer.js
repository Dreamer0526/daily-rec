const origin = {
  alerts: [],
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
  const { type = "", payload = {} } = action;
  const { username, password } = payload;

  switch(type) {
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
    
      default:
        return state;
  }
}

export default reducer;