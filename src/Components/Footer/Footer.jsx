import React from "react";
import * as FaIcons from "react-icons/fa";
import { links } from "../../ImportantLinks";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer-nav">
        <a href="#about" className="footer-link">
          Sobre mim
        </a>
        <a href="#projects" className="footer-link">
          Projetos
        </a>
        <a href="#contact" className="footer-link">
          Contato
        </a>
      </h3>
      <div className="social-footer-links">
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
          <FaIcons.FaLinkedin className="icon-social-link" />
        </a>
        <a href={links.instagram} target="_blank" rel="noopener noreferrer">
          <FaIcons.FaInstagram className="icon-social-link" />
        </a>
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          <FaIcons.FaGithub className="icon-social-link" />
        </a>
      </div>

      <div className="made-for">
        <p className="thank-text">
          Feito com &#60;3 por{" "}
          <a
            style={{ marginLeft: 0 }}
            className="footer-link"
            href="https://www.linkedin.com/in/keven-barros/"
          >
            Keven Barros
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
