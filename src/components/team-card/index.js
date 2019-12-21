import React from "react";
import { Card, CardBody, CardImg, Col } from "reactstrap";
import placholder from "../../assets/placeholder.png";

export default ({ name, id, navigate = () => {} }) => (
  <Col xs="12" sm="4" onClick={() => navigate(id)}>
    <Card>
      <CardBody>
        <div className="team-container">
          <CardImg src={placholder} alt="Card image cap" className="card-img" />
          <span>{name || "some Tilte"}</span>
        </div>
      </CardBody>
    </Card>
  </Col>
);
