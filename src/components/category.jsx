import React from "react";

const Category = (props) => {
  return (
    <div id="categorias" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Categorías</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (

              <div className="flip-card col-xs-6 col-md-4" key={`${d.title}-${i}`}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="title"><h3>{d.title}</h3></p>
                        {" "}
                        <p>{d.text}</p>
                        {d.smallImage ?
                        <img src={d.smallImage} alt={d.title} className="img-responsive"/> :
                        <img src="../../img/no-image.jpg" className="img-responsive" alt={d.title} />}
                    </div>
                    <div className="flip-card-back">
                      {d.n3 && d.n3.map((n3) => (
                        <a href={n3.link} target="_blank" rel="noreferrer"> <p>{n3.nombre}</p></a>
                      ))}
                    </div>
                </div>
              </div>
              ))
            : "Cargando..."}
        </div>
      </div>
    </div>
  );
};
export default Category;
