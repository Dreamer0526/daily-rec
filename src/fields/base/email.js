export const email = {
  value: "",
  desc: [],
  type: "email",
  placeholder: "Email",
  validation: {
    required: true,
    specs: [{
      rule: "regex",
      target: /^[a-zA-Z0-9-_.!#$%&'*+-/=?^`{|}~]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g,
      desc: "Wrong email format, e.g. xxx@yy.zz"
    }]
  }
};
