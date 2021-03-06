import { SELECT_BASE } from "../actions/base";
import { DESELECT_BASE } from "../actions/base";

export default function(state = [], action = {}) {
  switch (action.type) {
    case SELECT_BASE:
      return [...state,
        action.payload.id];
        case DESELECT_BASE:
        return state.filter(item => item !== action.payload.id)
    default:
      return state;
  }
}
