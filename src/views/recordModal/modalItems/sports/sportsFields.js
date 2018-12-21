import {
  date
} from "../../../../metadata/fields/date";
import {
  multiText
} from "../../../../metadata/fields/texts";
import {
  buttonGroup
} from "../../../../metadata/fields/buttons";

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
