import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Project.css";
function redirection(link) {
  window.location.href = link

}
const Project = ({ link, title, description, technologies }) => {
  return (
    <div className="box-project" onClick={() => redirection(link)}>
      <div>
        <header className="header-project">
          <FontAwesomeIcon icon={faFolder} className="folder-icon" />
          <a className="github-link" href={link}>
            <FontAwesomeIcon icon={faGithub} className="github-icon" />
          </a>
        </header>
        <main className="context-project">
          <h3 className="title-project">{title}</h3>
          <p className="description-project">{description}</p>
        </main>
      </div>

      <footer className="footer-techs">
        {technologies.map((tech, key) => {
          return (
            <div key={key}>
              <p className="tech-name">{tech}</p>
            </div>
          );
        })}
      </footer>
    </div>
  );
};

export default Project;
