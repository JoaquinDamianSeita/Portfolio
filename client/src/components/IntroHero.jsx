import React from "react";

function IntroHero() {
  return (
    <div className="px-4 py-5 text-center dark shadow-in" >
      <img
        className="d-block mx-auto mb-4"
        src={process.env.PUBLIC_URL + "/images/coder.svg"}
        alt="coder"
        width="500"
        height="200"
      />
      <h1 className="display-5 fw-bold name-font">Joaquin Seita</h1>
      <img
        className="d-block mx-auto mb-4 mt-3"
        src={process.env.PUBLIC_URL + "/images/divider.svg"}
        alt="divider"
      />
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Full-Stack MERN Developer</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-dark btn-lg px-4 gap-3">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroHero;
