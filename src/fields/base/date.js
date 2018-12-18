export const date = {
  value: new Date().toLocaleDateString().replace(/\//g, "-"),
  desc: "",
  type: "date",
  label: "Date",
  validation: {
    required: true
  }
};
