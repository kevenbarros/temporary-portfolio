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
          <h1>Eu construo boas aplicações web.</h1>
          <div className="description">
            <p>
              Sou um desenvolvedor de software procurando um emprego na posição júnior. Estou
              atualmente focado em aprender mais sobre tecnologias web como
              Typescript, React js  e Vue js.
            </p>
          </div>
          <Button className='discover-me' link={"#about"} > Descubra</Button>
        </div>
      </div>

    </main>
  );
};

export default Content;
