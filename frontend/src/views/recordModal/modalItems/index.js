import Diet from "./diet/Diet";
import Sports from "./sports/Sports";
import Finished from "./finished/Finished";

const registry = {
  diet: Diet,
  sports: Sports,
  finished: Finished
};

export default (name) => registry[name];
