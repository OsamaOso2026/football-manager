import React from "react";
import { Card, CardBody, CardImg, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import placholder from "../../assets/placeholder.png";

const Main = ({ navigate, league: { name, id }, withButton }) => {
  return (
    <Col xs="12" md="12">
      <Card>
        <CardBody>
          <div className="card-item">
            <CardImg
              src={placholder}
              alt="Card image cap"
              className="card-img"
            />
            <div className="card-content">
              <span>{name}</span>
              <div className="card-details">
                <div>
                  <FontAwesomeIcon icon="futbol" />
                  <span> name</span>
                </div>
                <div className="player-container">
                  <FontAwesomeIcon icon="running" />

                  <span> name</span>
                </div>
                {withButton && (
                  <button
                    onClick={() => navigate(id)}
                    className="btn btn-primary detail-btn"
                  >
                    Details
                  </button>
                )}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Main;
