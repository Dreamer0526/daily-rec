import {
  date
} from "../../../../metadata/fields/date";
import {
  multiText
} from "../../../../metadata/fields/texts";
import {
  coloredRating
} from "../../../../metadata/fields/ratings";
import {
  buttonGroup
} from "../../../../metadata/fields/buttons";

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
