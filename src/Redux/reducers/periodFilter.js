import { SET_PERIOD } from "../actionTypes";
import { PERIODS } from "../../constants";

const initialState = PERIODS.DAY;

const periodFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERIOD: {
      return action.payload.period;
    }
    default: {
      return state;
    }
  }
};

export default periodFilter
