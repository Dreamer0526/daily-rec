import {
  date
} from "./base/date";
import {
  multiText
} from "./base/texts";

const sportsFields = {
  date,
  sports: { ...multiText,
    label: "Sports"
  }
};

export default sportsFields;
