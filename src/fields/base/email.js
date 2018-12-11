export const email = {
  value: "",
  desc: "",
  pristine: true,
  type: "email",
  placeholder: "Email",
  validation: {
    required: false
  }
}

const regex = "/^[a-zA-Z0-9-_\.\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/g"