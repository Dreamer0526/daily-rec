export const email = {
  value: null,
  desc: null,
  type: "email",
  placeholder: "Email",
  validation: {
    required: false,
    specs: [{
      type: "regex",
      rule: /^[a-zA-Z0-9-_\.\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/g,
      desc: "Wrong format"
    }, {
      type: "minLength",
      rule: 6,
      desc: "Should be longer than 6 charactors"
    }]
  }
}
