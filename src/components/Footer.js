import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt, FaGlobe } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer" style={{ marginTop: "60px", padding: "40px 0", backgroundColor: "#111" }}>
      <Row>
        {/* Sobre */}
        <Col xs={12} md={4} className="footer-about mb-3">
          <h5 style={{ color: "#fff" }}>Sobre</h5>
          <p style={{ color: "#bbb" }}>
            Desenvolvido por Amadeu dos Anjos Barros.<br />
            Entusiasta de tecnologia, com foco em soluções web modernas, acessíveis e com boa experiência de utilizador.
            <br />
            <FaGlobe style={{ marginRight: "6px" }} />
            <a
              href="https://seuportifolio.com"
              style={{ color: "white", textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfólio
            </a>
          </p>
        </Col>

        {/* Contato */}
        <Col xs={12} md={4} className="footer-contact mb-3">
          <h5 style={{ color: "#fff" }}>Contato</h5>
          <p style={{ color: "#bbb", marginBottom: "0.6em" }}>
            <AiOutlineMail style={{ marginRight: "6px" }} />
            <a href="mailto:seuemail@email.com" style={{ color: "white" }}>
              seuemail@email.com
            </a>
          </p>
          <p style={{ color: "#bbb", marginBottom: "0.6em" }}>
            <FaPhoneAlt style={{ marginRight: "6px" }} />
            +351 912 345 678
          </p>
          <p style={{ color: "#bbb" }}>
            Localização: Lisboa, Portugal
          </p>
        </Col>

        {/* Navegação e Redes */}
        <Col xs={12} md={4} className="footer-links mb-3">
          <h5 style={{ color: "#fff" }}>Links Rápidos</h5>
          <ul className="footer-nav" style={{ listStyle: "none", padding: 0, marginBottom: "1em" }}>
            <li><a href="/" style={{ color: "white" }}>Início</a></li>
            <li><a href="/about" style={{ color: "white" }}>Sobre</a></li>
            <li><a href="/projects" style={{ color: "white" }}>Projetos</a></li>
            <li><a href="/contact" style={{ color: "white" }}>Contato</a></li>
          </ul>
          <h5 style={{ color: "#fff" }}>Siga-me</h5>
          <ul className="footer-icons" style={{ padding: 0, display: "flex", gap: "12px", listStyle: "none" }}>
            <li className="social-icons">
              <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ color: "white" }}>
                <AiFillGithub size={25} />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://twitter.com/seuusuario" target="_blank" rel="noopener noreferrer" title="Twitter" style={{ color: "white" }}>
                <AiOutlineTwitter size={25} />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: "white" }}>
                <FaLinkedinIn size={25} />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.instagram.com/seuusuario" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ color: "white" }}>
                <AiFillInstagram size={25} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>

      {/* Rodapé Inferior */}
      <Row className="footer-bottom" style={{ marginTop: "30px" }}>
        <Col md={12} style={{ textAlign: "center", color: "#bbb", fontSize: "1em" }}>
          © {year} Amadeu dos Anjos Barros &nbsp;|&nbsp; Todos os direitos reservados.
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
