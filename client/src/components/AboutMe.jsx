import React from "react";

function AboutMe() {
  return (
    <div className="container sky col-xl-10 col-xxl-8 px-4 py-5" >
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-3 fw-bold mb-3 title-cv">¿Quién soy?</h1>

          <p className="col-lg-10 fs-4">
            Soy un desarrollador web en búsqueda de aprender nuevas tecnologías,
            actualmente me encuentro utilizando el stack MERN. Estoy abierto a
            cualquier posibilidad que me permita adquirir experiencia
            profesional. Me describo como una persona responsable y con muchas
            ganas de aprender.
          </p>

        </div>

        <div className="col-md-12 mx-auto col-lg-5 col-sm-12 d-flex justify-content-center">
          <img
            className="sky my-4"
            src={process.env.PUBLIC_URL + "/images/MERN-logo.png"}
            alt="coder"
            width="100%"
            height="80%"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
