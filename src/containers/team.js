import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { TeamCard, GameCard, PlayerCard, withLoader } from "../components";

const mapStateToProps = state => {
  const { team, games = [], loading } = state.team;
  return {
    team,
    games,
    loading
  };
};

export class Team extends Component {
  componentDidMount() {
    let { params: { id = "" } = {} } = this.props.match ? this.props.match : {};
    this.props.fetchSignleTeam(id);
  }

  renderGames = () => {
    const { games } = this.props;
    return games.map((game, i) => (
      <GameCard navigate={this.gotToTeam} game={game} key={i} />
    ));
  };

  renderSquad = () => {
    const { squad = [] } = this.props.team;
    return squad.map((palyer, i) => (
      <PlayerCard navigate={this.gotToTeam} palyer={palyer} key={i} />
    ));
  };

  render() {
    const { name, games = [] } = this.props.team;

    return (
      <div>
        <TeamCard id={1} name={name} />
        <div className="break-line" />
        <h4>Players</h4>
        <div className="allteams-container">{this.renderSquad()}</div>
        <div className="break-line" />
        <h4>Games</h4>
        <div className="allteams-container">{this.renderGames()}</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(withLoader(Team));
