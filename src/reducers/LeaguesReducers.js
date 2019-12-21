import {
  FETCH_LEAGUES_SUCCESS,
  FETCH_LEAGUES_START,
  FETCH_LEAGUES_Failed
} from "../actions/types";

const INITIAL_STATE = {
  leagues: [],
  loading: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LEAGUES_START:
      return {
        ...state,
        loading: true
      };

    case FETCH_LEAGUES_SUCCESS:
      return {
        ...state,
        leagues: action.payload,
        loading: false
      };

    case FETCH_LEAGUES_Failed:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};
