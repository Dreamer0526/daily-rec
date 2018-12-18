export const password = {
  value: "",
  desc: [],
  type: "password",
  placeholder: "Password",
  validation: {
    required: true,
    specs: [{
        rule: "minLength",
        target: 3,
        desc: "At least 3 charactors",
      },
      {
        rule: "maxLength",
        target: 30,
        desc: "At most 30 charactors",
      }
    ]
  }
}

export const confirmPassword = {
  value: "",
  desc: [],
  type: "password",
  placeholder: "Confirm Password",
  validation: {
    required: true,
    specs: [{
      rule: "equal",
      target: "password",
      desc: "Confirm password should match your password"
    }]
  }
}
