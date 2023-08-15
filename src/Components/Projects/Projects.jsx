import React from "react";
import Project from "../Project/Project";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="main projects" id="projects">
      <h1 className="title-projects">Projetos</h1>

      <p className="description-projects">
        Aqui estão alguns projetos com os quais tenho trabalhado recentemente:
      </p>

      <div className="projects-group">
        <Project
          link={"https://github.com/kevenbarros/url-shortener"}
          title={"Encurtador de url"}
          description={
            "Um projeto full stack, no qual pude explorar diversas tecnologias tanto front-end quanto back-end e testes automatizados."
          }
          technologies={["Vue", "Typescript", "Node", "MongoDB"]}
        />
        <Project
          link={"https://github.com/kevenbarros/Moon"}
          title={"Moon"}
          description={
            "A Moon é um software feito em react js, um projeto front-end com o intuito de gerenciar as dívidas pessoais."
          }
          technologies={["React", "Firebase", "Sass"]}
        />
        <Project
          link={"https://github.com/kevenbarros/facedogs"}
          title={"FaceDogs"}
          description={
            "FaceDogs é uma rede social feito para os pets, no qual pude botar em pratica meu conhecimento de React js"
          }
          technologies={["React", "Sass", "Axios"]}
        />
        <Project
          link={"https://github.com/kevenbarros/letmeask"}
          title={"Letmeask"}
          description={
            "Letmeask é uma plataforma construída para permitir que você reúna perguntas de seus espectadores durante a transmissão, um projeto acompanhado (NLW - Together / Rocketseat)"
          }
          technologies={["React ", "Firebase", "Sass"]}
        />
        <Project
          link={"https://github.com/kevenbarros/Buscador-de-cnpj-Python"}
          title={"Buscador de cnpj Python"}
          description={
            "Um projeto em python de busca e armazenamento de cnpj, no qual pude trabalhar com consumo de apis e CRUD em SQLite"
          }
          technologies={["Python ", "SQLite"]}
        />
        <Project
          link={"https://github.com/kevenbarros/Games"}
          title={"Games"}
          description={
            "Um Repositorio com 3 jogos classicos, como Flappy Bird, Pong e um jogo autoral de batalha espacial, todos feitos apenas com javascript, html e css."
          }
          technologies={["Javascript", "Html", "Css"]}
        />
      </div>
    </div>
  );
};

export default Projects;
