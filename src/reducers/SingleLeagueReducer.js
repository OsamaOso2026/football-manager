import {
  FETCH_LEAGUE_DETAILS_SUCCESS,
  FETCH_TEAMS_LEAGUE_SUCCESS,
  FETCH_TEAMS_LEAGUE_START,
  FETCH_TEAMS_LEAGUE_FAILED
} from "../actions/types";

const INITIAL_STATE = {
  oneLeague: {},
  teams: [],
  loading: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LEAGUE_DETAILS_SUCCESS:
      return {
        ...state,
        oneLeague: action.payload
      };

    case FETCH_TEAMS_LEAGUE_SUCCESS:
      return {
        ...state,
        teams: action.payload,
        loading: false
      };

    case FETCH_TEAMS_LEAGUE_START:
      return {
        ...state,
        loading: true
      };

    case FETCH_TEAMS_LEAGUE_FAILED:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};
