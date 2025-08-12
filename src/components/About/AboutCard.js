import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("aboutCard.greeting1")} <span className="purple">Amadeu dos Anjos Barros</span> {t("aboutCard.greeting2")} <span className="purple">Viana do Castelo, Portugal.</span>
            <br />
            {t("aboutCard.employment")}
            <br />
            {t("aboutCard.education")}
            <br />
            <br />
            {t("aboutCard.activitiesIntro")}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCard.activity1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCard.activity2")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCard.activity3")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCard.activity4")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCard.activity5")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCard.activity6")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{t("aboutCard.quote")}"
          </p>
          <footer className="blockquote-footer">Amadeu Barros</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
