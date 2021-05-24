import React from "react";

function IntroHero() {
  return (
    <div class="px-4 py-5 text-center sky-blue">
      <img
        class="d-block mx-auto mb-4"
        src={process.env.PUBLIC_URL + "/images/coder.svg"}
        alt="coder"
        width="500"
        height="200"
      />
      <h1 class="display-5 fw-bold">Joaquin Seita</h1>
      <img
        class="d-block mx-auto mb-4 mt-3"
        src={process.env.PUBLIC_URL + "/images/divider.svg"}
        alt="divider"
      />
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Full-Stack MERN Developer</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-dark btn-lg px-4 gap-3">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroHero;
