import React from "react";

function IntroHero() {
  return (
    <div
      className="px-4 py-5 text-center shadow-in"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/react-fondo.jpg"
        })`,
        backgroundPosition: "bottom",
        minHeight:500,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="display-5 fw-bold name">Joaquin Seita</h1>
      <img
        className="d-block mx-auto mb-4 mt-3"
        src={process.env.PUBLIC_URL + "/images/divider.svg"}
        alt="divider"
      />
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4 desc">Full-Stack MERN Developer</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-dark btn-lg px-4 gap-3" style={{backgroundColor:"#000"}}>
            <b className="name">Contactame!</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroHero;
