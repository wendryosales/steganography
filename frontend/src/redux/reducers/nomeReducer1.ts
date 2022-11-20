import { ACTION_TESTE } from "../actions/types";

const INITIAL_STATE = {};

const nomeReducer1 = (state = INITIAL_STATE, action) => {
 switch(action.type) {
    case ACTION_TESTE:
      return { ...state, ...action.payload };
    default:
      return state;
 }
}

export default nomeReducer1;