import React from "react";
import "./Links.css";

const Links = () => {
  return (
    <div>
      <ul className="accounts">
        <li className="social-icons">
          <a href="https://github.com/kevenbarros/" target="_blank" rel="noreferrer">
            <i className="devicon-github-original"></i>
          </a>
        </li>
        <li className="social-icons">
          <a href="https://instagram.com/kevenbarros" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className="social-icons">
          <a href="https://www.linkedin.com/in/keven-barros/" target="_blank" rel="noreferrer">
            <i className="devicon-linkedin-plain"></i>
          </a>
        </li>
        <span className="line"></span>
      </ul>
    </div>
  );
};

export default Links;
