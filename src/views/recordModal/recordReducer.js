import {
  combineReducers
} from "redux";
import diet from "./modalItems/diet/dietReducer";
import sports from "./modalItems/sports/sportsReducer";
import finished from "./modalItems/finished/finishedReducer";

const reducers = combineReducers({
  diet,
  sports,
  finished
});

export default reducers;
