import React from "react";

export const Image = ({ title, link, smallImage }) => {
  return (
    <div className="galeria-item">
      <div className="hover-bg">
        {" "}
        <a href={link} title={title} data-lightbox-gallery="gallery1" target="_blank" rel="noreferrer">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          {smallImage ? <img src={smallImage} className="img-responsive" alt={title} /> :
          <img src="../../img/no-image.jpg" className="img-responsive" alt={title} />}{" "}
        </a>{" "}
      </div>
    </div>
  );
};
