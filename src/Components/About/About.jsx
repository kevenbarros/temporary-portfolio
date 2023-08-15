import React from "react";
import "./About.css";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className="main about" id="about">
      <h1>
        Sobre mim <hr />
      </h1>
      <p className="description">
        Olá! Meu nome é Keven e gosto de criar coisas para internet.
        Meu interesse por desenvolvimento web começou em 2018 quando decidi entrar nesse mundo — primeiro comecei a
        aprender sobre html e css para criar rapidamente lindas páginas estáticas e sentir que estava fazendo algo legal!
      </p>

      <p className="description">
        Quanto à experiência profissional, já trabalhei 1 ano como desenvolvedor front-end na empresa  <a
          href="https://hurst.capital"
          className="last-job-link-a"
          target="_blank"
          rel="noreferrer"
        >Hurst capital</a>
        , no qual pude aprender mais sobre as tecnologias que utilizo hoje, como React js, Vue js, Next js, Typescript e ferramenta de versionamento como Git.
      </p>

      <p className="description">
        Também trabalhei 1 ano como desenvolvedor fullstack na empresa <a
          href="https://www.drclick.com.br"
          className="last-job-link-a"
          target="_blank"
          rel="noreferrer"
        >Dr Click</a>
        , no qual pude aprender mais sobre as tecnologias back-end, como Node js em relação ao banco utilizei MySql, também pude aprender bastante sobre gerência e padrões de projetos.
      </p>

      <p className="description">
        Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:
      </p>
      <ul className="technologies-ul">
        <li className="technologies-li">
          <FontAwesomeIcon icon={faCode} className="technologies-li-icon" />
          React.JS
        </li>
        <li className="technologies-li">
          <FontAwesomeIcon icon={faCode} className="technologies-li-icon" />
          Node.JS
        </li>
        <li className="technologies-li">
          <FontAwesomeIcon icon={faCode} className="technologies-li-icon" />
          Vue.JS
        </li>
        <li className="technologies-li">
          <FontAwesomeIcon icon={faCode} className="technologies-li-icon" />
          Typescript
        </li>
        <li className="technologies-li">
          <FontAwesomeIcon icon={faCode} className="technologies-li-icon" />
          Next.JS
        </li>
        <li className="technologies-li">
          <FontAwesomeIcon icon={faCode} className="technologies-li-icon" />
          React native
        </li>
        <li className="technologies-li">
          <FontAwesomeIcon icon={faCode} className="technologies-li-icon" />
          Git/Github
        </li>
        <li className="technologies-li">
          <FontAwesomeIcon icon={faCode} className="technologies-li-icon" />
          Html/Css/Sass
        </li>
      </ul>
    </div>
  );
};

export default About;
