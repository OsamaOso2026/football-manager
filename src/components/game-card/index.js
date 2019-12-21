import React from "react";
import { Card, CardBody, CardImg, Col } from "reactstrap";
import placholder from "../../assets/placeholder.png";

export default ({ game: { id, data = "", result } }) => (
  <Col xs="12" sm="6">
    <Card>
      <CardBody>
        <div className="game-container">
          <CardImg src={placholder} alt="Card image cap" className="card-img" />

          {result ? (
            <span>{result}</span>
          ) : (
            <div className="game-tiltes-container">
              <span>{`Scheduling`}</span>
              <span>{`${data}`}</span>
            </div>
          )}

          <CardImg src={placholder} alt="Card image cap" className="card-img" />
        </div>
      </CardBody>
    </Card>
  </Col>
);
