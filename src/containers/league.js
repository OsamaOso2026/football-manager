import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Main, TeamCard, withLoader } from "../components";

const mapStateToProps = state => {
  const { oneLeague, teams, loading } = state.league;
  return {
    leagueDetails: oneLeague,
    teams,
    loading
  };
};

export class League extends Component {
  componentDidMount() {
    let { params: { id = "" } = {} } = this.props.match ? this.props.match : {};
    this.props.fetchSignleLeague(id);
    this.props.fetchLeagueTeams(id);
  }

  gotToTeam = id => this.props.history.push(`/team/${id}`);

  renderTeams = () => {
    const { teams = [] } = this.props;
    return teams.map(({ name, id }, i) => (
      <TeamCard id={id} navigate={this.gotToTeam} name={name} key={i} />
    ));
  };

  render() {
    const { leagueDetails } = this.props;
    return (
      <div>
        <h6>Foot Ball Leagues</h6>
        <h>Premier League</h>
        <Main league={leagueDetails} />
        <div className="break-line" />
        <h>Teams</h>

        <div className="allteams-container">{this.renderTeams()}</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(withLoader(League));
