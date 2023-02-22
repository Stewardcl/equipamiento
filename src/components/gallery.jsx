import { Image } from "./image";
import React from "react";

const Gallery = (props) => {
  return (
    <div id="galeria" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galería</h2>
          <p>
            El Mejor Equipamiento...
          </p>
        </div>
        <div className="row">
          <div className="galeria-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      link={d.link}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Cargando..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
