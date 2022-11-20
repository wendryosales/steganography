import type { Reducer } from '@reduxjs/toolkit';
import { UPLOAD_FAIL, UPLOAD_SUCESS } from "../actions/constants";


const INITIAL_STATE = 'close';

const uploadReducer:Reducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
    case UPLOAD_SUCESS:
      return action.payload;
    case UPLOAD_FAIL:
      return action.payload;
    default:
      return state;
 }
}

export default uploadReducer;