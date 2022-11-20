import type { Reducer } from '@reduxjs/toolkit';
import { ADD_FILE, REMOVE_FILE } from "../actions/constants";


const INITIAL_STATE = {};

const fileReducer:Reducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
    case ADD_FILE:
      return { ...state, ...action.payload };
    case REMOVE_FILE:
      return INITIAL_STATE;
    default:
      return state;
 }
}

export default fileReducer;