import React from "react";

function IntroHero() {


  return (
    <div
      className="px-4 py-5 text-center shadow-in intro-container"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/react-fondo.jpg"
        })`,
        backgroundPosition: "bottom",
        minHeight: 550,
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
          <button type="button" className="btn-custom-boots btn-lg px-4 gap-3">
            <b className="desc"> <a download href={process.env.PUBLIC_URL + "/images/Joaquin_Damian_Seita.pdf"}>Descargar CV!</a></b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroHero;
