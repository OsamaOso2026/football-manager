import {
  FETCH_TEAM_DETAILS_SUCCESS,
  FETCH_TEAM_DETAILS_FAILED,
  FETCH_TEAM_DETAILS_START
} from "../actions/types";
import { team } from "../utilis";

const INITIAL_STATE = {
  team: {},
  games: team.games,
  loading: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TEAM_DETAILS_SUCCESS:
      return {
        ...state,
        team: action.payload,
        loading: false
      };

    case FETCH_TEAM_DETAILS_START:
      return {
        ...state,
        loading: true
      };

    case FETCH_TEAM_DETAILS_FAILED:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
};
