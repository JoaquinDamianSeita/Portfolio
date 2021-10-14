import React from "react";

function AboutMe() {
  return (
    <div className="container sky col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-3 fw-bold mb-3 title-cv">¿Quién soy?</h1>

          <p className="col-lg-10 fs-4">
            Soy un desarrollador web actualmente trabajando con el 
            stack MERN. Me describo como una persona
            responsable, con gran capacidad de adaptación y aprendizaje.
          </p>
        </div>

        <div className="col-md-12 mx-auto col-lg-5 col-sm-12 d-flex justify-content-center">
          <img
            className="sky my-4"
            src={process.env.PUBLIC_URL + "/images/MERN-logo.png"}
            alt="MERN stack MongoDB Express React Nodejs"
            width="100%"
            height="80%"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
