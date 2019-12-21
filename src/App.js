import React from "react";
import "./App.css";

import * as actions from "./actions";
import { connect } from "react-redux";
import { Header, Footer } from "./components";
import { Container } from "reactstrap";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFutbol, faRunning } from "@fortawesome/free-solid-svg-icons";

library.add(faFutbol, faRunning);

const mapStateToProps = state => {
  return {
    leagues: state.leagues.leagues
  };
};
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Header />
          <Routes />
          <Footer />
        </Container>
      </BrowserRouter>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(App);
