import React from "react";
import { WhatsAppButton } from "./WhatsAppButton";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="img/logoroma.jpg" alt="Roma Padel Logo" />
          </a>{" "}
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#header" className="page-scroll">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Servicios
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Fotos
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contacto
              </a>
            </li>

            <li style={{ display: 'flex', alignItems: 'center' }}>
              <WhatsAppButton size="sm" isNavbar={true} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
