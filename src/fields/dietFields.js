import {
  date
} from "./base/date";
import {
  multiText
} from "./base/texts";
import {
  coloredRating
} from "./base/ratings";
import {
  buttonGroup
} from "./base/buttons";

const dietFields = {
  date,
  breakfast: { ...multiText,
    label: "Breakfast"
  },
  extraMeal1: { ...multiText,
    label: "Extra Meal"
  },
  lunch: { ...multiText,
    label: "Lunch"
  },
  extraMeal2: { ...multiText,
    label: "Extra Meal"
  },
  dinner: { ...multiText,
    label: "Dinner"
  },
  rating: coloredRating,
  buttonGroup: {
    ...buttonGroup,
    labels: ["Next", "Back"]
  }
};

export default dietFields;
