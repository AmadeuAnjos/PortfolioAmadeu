import React from "react";
import { Col, Row } from "react-bootstrap";
import { GrWindows } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <GrWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
    </Row>
  );
}

export default Toolstack;
