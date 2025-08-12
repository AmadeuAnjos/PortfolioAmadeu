import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import favorita from "../../Assets/favorita.png";
import mec from "../../Assets/mec.png";
import suvires from "../../Assets/suvires.png";
import palanca from "../../Assets/palanca.png";
import iniciacao from "../../Assets/iniciacao.png";
import lics from "../../Assets/lics.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("projects.myRecent")} <strong className="purple">{t("projects.works")}</strong>
        </h1>
        <p style={{ color: "white" }}>
          {t("projects.description")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card"> 
            <ProjectCard
              imgPath={palanca}
              isBlog={false}
              title={t("projects.palanca.title")}
              description={t("projects.palanca.description")}
              ghLink="https://palancanegracafe.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lics}
              isBlog={false}
              title={t("projects.lics.title")}
              description={t("projects.lics.description")}
              ghLink="https://licstransfer.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suvires}
              isBlog={false}
              title={t("projects.fac.title")}
              description={t("projects.fac.description")}
              ghLink="https://amadeuanjos.github.io/factory-4.0/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mec}
              isBlog={false}
              title={t("projects.mec.title")}
              description={t("projects.mec.description")}
              ghLink="https://amadeuanjos.github.io/mec-paulo/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={favorita}
              isBlog={false}
              title={t("projects.pizz.title")}
              description={t("projects.pizz.description")}
              ghLink="https://amadeuanjos.github.io/landing-page-pizzeria/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iniciacao}
              isBlog={false}
              title={t("projects.pesquisa.title")}
              description={t("projects.pesquisa.description")}
              ghLink="https://github.com/AmadeuAnjos/iniciacao-tecnologica"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
