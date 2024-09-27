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
        Olá! Meu nome é Keven e gosto de criar coisas para internet. Meu
        interesse por desenvolvimento web começou em 2018 quando decidi entrar
        nesse mundo — primeiro comecei a aprender sobre html e css para criar
        rapidamente lindas páginas estáticas e sentir que estava fazendo algo
        legal!
      </p>

      <p className="description">
        Quanto à experiência profissional, já trabalhei 1 ano como desenvolvedor
        front-end na empresa{" "}
        <a
          href="https://hurst.capital"
          className="last-job-link-a"
          target="_blank"
          rel="noreferrer"
        >
          Hurst capital
        </a>
        , desenvolvi páginas e funcionalidades com foco na experiência do
        usuário, utilizando Vue.js, React.js e Next.js. Atuei na criação de
        interfaces interativas e responsivas, sempre visando otimizar a
        usabilidade e a performance das aplicações.
      </p>

      <p className="description">
        Também trabalhei 1 ano como desenvolvedor fullstack na empresa{" "}
        <a
          href="https://www.drclick.com.br"
          className="last-job-link-a"
          target="_blank"
          rel="noreferrer"
        >
          Dr Click
        </a>
        , Desenvolvi um sistema abrangente com módulos de agendamentos,
        prontuários médicos, gestão financeira, agendamentos online, combos e
        convênios. Destaco meu papel crucial no desenvolvimento autônomo do
        módulo de convênios, integrando-se com diversos convênios, gerando XML e
        facilitando a gestão de guias. Contribuí para o projeto de um totem de
        senhas em Electra.js, assim como no desenvolvimento do agendamento
        online usando Next.js e do sistema principal com React.js e Vue.js.
        Minha experiência demonstra não apenas habilidades técnicas, mas também
        a capacidade de liderar projetos inovadores na área de tecnologia da
        informação em saúde.
      </p>

      <p className="description">
        Hoje trabalho na empresa{" "}
        <a
          href="https://encibra.com.br/"
          className="last-job-link-a"
          target="_blank"
          rel="noreferrer"
        >
          Encibra
        </a>
        , atuo como desenvolvedor front-end no projeto de uma plataforma de
        vistoria de saneamento de água e esgoto para o governo de Alagoas.
        Minhas principais responsabilidades incluíam o desenvolvimento de
        páginas de formulários e relatórios, além de trabalhar com mapas
        interativos e gráficos para visualização de dados. Utilizei tecnologias
        como GraphQL, REST API e Next.js para criar interfaces eficientes e
        dinâmicas.
      </p>

      <p className="description">
        Aqui estão algumas tecnologias com as quais tenho trabalhado
        recentemente:
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
        <li className="technologies-li">
          <FontAwesomeIcon icon={faCode} className="technologies-li-icon" />
          GraphQl
        </li>
        <li className="technologies-li">
          <FontAwesomeIcon icon={faCode} className="technologies-li-icon" />
          Storybook
        </li>
      </ul>
    </div>
  );
};

export default About;
