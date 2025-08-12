import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1>
              {t("aboutSection.knowWho")} <strong className="purple">{t("aboutSection.im")}</strong>
            </h1>

            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          {t("about.professional")} <strong className="purple">{t("about.skillset")}</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{t("about.tools")}</strong> {t("about.iUse")}
        </h1>

        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
