import React from "react";
import Button from "../Button/Button";
import "./Info.css";
import Navbar from "../Navbar/Navbar";

const Content = () => {
  return (
    <main className="main-info">
      <div>
        <Navbar />
      </div>
      <div className="box-content-info">
        <div className="info">
          <h3>Olá meu nome é</h3>
          <h1>Keven William.</h1>
          <h1>Desenvenvolvedor de software como foco em front-end.</h1>
          <div className="description">
            <p>
              Sou um desenvolvedor de software pleno. Estou
              atualmente focado em aprender mais sobre tecnologias web como
              Typescript, React js, Vue js e Angular.
            </p>
          </div>
          <Button className='discover-me' link={"#about"} > Descubra</Button>
        </div>
      </div>

    </main>
  );
};

export default Content;
