import React from "react";
import "./LeagueCard.css";
import { Container, Row, Col } from "reactstrap";

const LeagueCard = ({ title, value, titleClass, valueClass, currency }) => (
  <Container>
    <Row class>
      <img />
      <h4 className="title-league">title</h4>
      <div>
        <Row>
          <Row>
            <div>icon</div>
            <h6>Name</h6>
          </Row>
          <Row>
            <div>icon</div>
            <h6>Name</h6>
          </Row>
        </Row>
      </div>
      <button className="btn-card">details</button>
    </Row>
  </Container>
);

export default LeagueCard;
