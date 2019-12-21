import { getSinglLeTeam, getTeams } from "../services";
import {
  FETCH_TEAM_DETAILS_SUCCESS,
  FETCH_TEAMS_LEAGUE_SUCCESS,
  FETCH_TEAMS_LEAGUE_START,
  FETCH_TEAMS_LEAGUE_FAILED,
  FETCH_TEAM_DETAILS_START,
  FETCH_TEAM_DETAILS_FAILED
} from "./types";

export function fetchSignleTeam(id) {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_TEAM_DETAILS_START
      });

      let res = await getSinglLeTeam(id);

      dispatch({
        type: FETCH_TEAM_DETAILS_SUCCESS,
        payload: res
      });
    } catch (e) {
      dispatch({
        type: FETCH_TEAM_DETAILS_FAILED
      });
    }
  };
}

export function fetchLeagueTeams(id) {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_TEAMS_LEAGUE_START
      });

      let res = await getTeams(id);

      dispatch({
        type: FETCH_TEAMS_LEAGUE_SUCCESS,
        payload: res.teams
      });
    } catch (e) {
      dispatch({
        type: FETCH_TEAMS_LEAGUE_FAILED
      });
    }
  };
}
