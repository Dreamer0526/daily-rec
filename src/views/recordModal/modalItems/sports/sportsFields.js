import fields from "../../../../metadata/fields";

const {
  date,
  multiText,
  buttonGroup
} = fields;

const sportsFields = {
  date,
  sports: { ...multiText,
    label: "Sports"
  },
  buttonGroup: {
    ...buttonGroup,
    labels: ["Next", "Back"]
  }
};

export default sportsFields;
