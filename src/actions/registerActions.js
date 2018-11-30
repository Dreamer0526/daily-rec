export const submitRegisterFrom = ({username, password}) => {
  return {
    type: "submit_register_form",
    payload: {
      username,
      password
    }
  }
} 