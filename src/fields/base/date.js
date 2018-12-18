const today = new Date();
const y = today.getFullYear();
const m = today.getMonth() + 1;
const d = today.getDate();

export const date = {
  value: `${y}-${m}-${d}`,
  desc: [],
  type: "date",
  label: "Date",
  validation: {
    required: true
  }
};
