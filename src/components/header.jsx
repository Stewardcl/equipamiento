import React from "react";
import HoverComp from './hoverComp';

const Header = (props) => {
  return (
    <header id="header" className="header2">
      <div className="intro">
        {props.data && props.data.equipos.map(equip =>
          <HoverComp
            key={equip.id}
            url={equip.url}
            class={equip.class}
            link={equip.link}
            height={equip.height}
            width={equip.width}
            left={equip.left}
            top={equip.top}
            nombre={equip.nombre}
            categoria={equip.categoria}
            precio={equip.precio}
          />)}
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-1  intro-text">
                <img src="../../img/steward-logo.png" alt="Steward" width="200"/>
                {/*<h1>
                  {props.data ? props.data.title : "Cargando"}
                  <span></span>
                </h1>*/}
                <p>{props.data ? props.data.paragraph : "Cargando"}</p>
                <a
                  href="https://steward.cl/" target="_blank" rel="noreferrer"
                  className="btn btn-custom btn-lg"
                >
                  Ir a Steward.cl
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;