import {
  date
} from "./base/date";
import {
  multiText
} from "./base/texts";
import {
  buttonGroup
} from "./base/buttons";

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
