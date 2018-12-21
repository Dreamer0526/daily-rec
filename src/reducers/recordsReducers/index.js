import {
  combineReducers
} from "redux";
import diet from "./dietReducer";
import sports from "./sportsReducer";
import finished from "./finishedReducer";

const reducers = combineReducers({
  diet,
  sports,
  finished
});

export default reducers;
