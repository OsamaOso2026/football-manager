import { combineReducers } from "redux";

import LeaguesReducers from "./LeaguesReducers";
import SingleLeagueReducer from "./SingleLeagueReducer";
import teamReducer from "./TeamReducer";

export default combineReducers({
  leagues: LeaguesReducers,
  league: SingleLeagueReducer,
  team: teamReducer
});
