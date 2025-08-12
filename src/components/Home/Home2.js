import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Home2() {
  const { t } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("intro.letMe")} <span className="purple">{t("intro.introduce")}</span> {t("intro.myself")}
            </h1>
            <p className="home-about-body">
              {t("intro.loveProgramming")}{" "}
              <span role="img" aria-label="thinking">🤷‍♂️</span>
              <br />
              <br />
              {t("intro.fluentIn")}{" "}
              <i>
                <b className="purple">{t("intro.languages")}</b>
              </i>
              <br />
              <br />
              {t("intro.interests")}{" "}
              <i>
                <b className="purple">{t("intro.webTechnologies")}</b>
              </i>
              <br />
              <br />
              {t("intro.passion")} <b className="purple">Node.js</b> {t("intro.and")}{" "}
              <i>
                <b className="purple">{t("intro.modernFrameworks")}</b>
              </i>{" "}
              {t("intro.like")}{" "}
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t("social.findMeOn")}</h1>
            <p>
              {t("social.feelFree")} <span className="purple">{t("social.connect")}</span> {t("social.withMe")}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AmadeuAnjos"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amadeuanjos/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/anjosamadeu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
