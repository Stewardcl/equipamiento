import React from "react";

const Features = (props) => {
  return (
    <div id="categorias" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Categorías</h2>
        </div>
        <div className="row">
          <div class="container2">
            {props.data
              ? props.data.map((d, i) => (

                <div className="col-xs-6 col-md-4" key={`${d.title}-${i}`}>

                    <div class="card2">
                        <span>
                          {d.title}
                        </span>
                      {d.n3 && d.n3.map((n3) => (
                          <a href={n3.link} target="_blank" rel="noreferrer"> <p>{n3.nombre}</p></a>
                      ))}
                    </div>
                </div>
                ))
              : "Cargando..."}
              </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
