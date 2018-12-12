export const password = {
  value: null,
  desc: null,
  type: "password",
  placeholder: "Password",
  validation: {
    required: true,
    specs: [{
        rule: "minLength",
        target: 8,
        desc: "At least 8 charactors",
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
  value: null,
  desc: null,
  type: "password",
  placeholder: "Confirm Password",
  validation: {
    required: true,
    specs: [{
      rule: "equal",
      target: "password",
      desc: "Should be the same with password"
    }]
  }
}