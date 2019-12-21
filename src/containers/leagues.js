import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Main, withLoader } from "../components";

const mapStateToProps = state => {
  const { leagues, loading } = state.leagues;
  return {
    leagues,
    loading
  };
};

export class Leagues extends Component {
  componentDidMount() {
    this.props.fetchLeagues();
  }
  goToLeagueDetails = id => this.props.history.push(`/League/${id}`);

  renderLeagues = () => {
    const ids = [
      2000,
      2001,
      2002,
      2003,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2021
    ];
    const { leagues = [] } = this.props;

    return leagues
      .filter(x => ids.includes(x.id))
      .map((league, i) => (
        <Main
          withButton
          navigate={this.goToLeagueDetails}
          key={i}
          league={league}
        />
      ));
  };
  render() {
    return <div>{this.renderLeagues()}</div>;
  }
}

export default connect(
  mapStateToProps,
  actions
)(withLoader(Leagues));
