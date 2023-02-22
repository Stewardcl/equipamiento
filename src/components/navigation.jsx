import React from "react";

const Navigation = (props) => {
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
            <img src="../../img/steward-logo.png" alt="Steward" width="120"/>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#categorias" className="page-scroll">
                Categorías
              </a>
            </li>
            <li>
              <a href="#somos" className="page-scroll">
                Quienes Somos
              </a>
            </li>
            <li>
              <a href="#servicios" className="page-scroll">
                Servicios
              </a>
            </li>
            <li>
              <a href="#galeria" className="page-scroll">
                Galería
              </a>
            </li>
            <li>
              <a href="#testimonios" className="page-scroll">
                Testimonios
              </a>
            </li>
            <li>
              <a href="#equipo" className="page-scroll">
                Equipo
              </a>
            </li>
            <li>
              <a href="#contacto" className="page-scroll">
                Contácto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
