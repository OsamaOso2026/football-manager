import { getLeagues, getSinglLeague } from "../services";
import { data, League } from "../utilis";
import {
  FETCH_LEAGUES_START,
  FETCH_LEAGUES_SUCCESS,
  FETCH_LEAGUE_DETAILS_SUCCESS,
  FETCH_LEAGUES_Failed
} from "./types";

export function fetchLeagues() {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_LEAGUES_START
      });

      let res = await getLeagues();

      dispatch({
        type: FETCH_LEAGUES_SUCCESS,
        payload: res.competitions
      });
    } catch (e) {
      dispatch({
        type: FETCH_LEAGUES_Failed
        //pass the error
      });
    }
  };
}

export function fetchSignleLeague(id) {
  return async dispatch => {
    try {
      let res = await getSinglLeague(id);

      dispatch({
        type: FETCH_LEAGUE_DETAILS_SUCCESS,
        payload: res
      });
    } catch (e) {}
  };
}
