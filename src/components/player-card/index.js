import React from "react";
import { Card, CardBody, CardImg, Col } from "reactstrap";
import placholder from "../../assets/placeholder.png";

export default ({ palyer: { name, position, role, id } }) => (
  <Col xs="12" sm="4">
    <Card>
      <CardBody>
        <div className="team-container">
          <CardImg src={placholder} alt="Card image cap" className="card-img" />
          <div className="player-description">
            <span>name : {name || "some Tilte"}</span>
            <span> position :{position || "some Tilte"}</span>

            <span>role :{role || "some Tilte"}</span>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);
