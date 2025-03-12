import React from "react";
import mxmexicoflag from "./../assets/mxmexicoflag.ico"

const SobreUs = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
        <center><img src={mxmexicoflag} alt="Icono de TechFatory" className="logo" width="500px" height="500px"/></center>
          <div className="carousel-caption d-none d-md-block">
            <h5>Encargad@ de la Barra de navegación</h5>
            <p>Estudiante de Desarrollo de Software Multiplataforma</p>
            
          </div>
        </div>

        <div className="carousel-item">
        <center><img src={mxmexicoflag} alt="Icono de TechFatory" className="logo" width="500px" height="500px"/></center>
          <div className="carousel-caption d-none d-md-block">
            <h5>Encargad@ de la Barra de navegación</h5>
            <p>Estudiante de Desarrollo de Software Multiplataforma</p>
          </div>
        </div>

        <div className="carousel-item">
          <center><img src={mxmexicoflag} alt="Icono de TechFatory" className="logo" width="500px" height="500px"/></center>
          <div className="carousel-caption d-none d-md-block">
            <h5>Encargad@ de la Barra de navegación</h5>
            <p>Estudiante de Desarrollo de Software Multiplataforma</p>
            <p className="user-select-all">
      <img src={mxmexicoflag} alt="" width="25px" /> +52 844 - 224 - 2953
    </p>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
    </div>

  );
};

export default SobreUs;
