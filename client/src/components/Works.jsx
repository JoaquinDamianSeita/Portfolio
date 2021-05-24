import React from "react";

function Works() {
  return (
    <div class="container light-blue mt-3 shadow-lg">
      <h1 class="display-5 fw-bold text-center">Portfolio</h1>
      <img
        class="d-block mx-auto mb-4 mt-3"
        src={process.env.PUBLIC_URL + "/images/divider.svg"}
        alt="divider"
      />
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
        <div class="col text-center">
          <div class="card shadow-xl border-dark">
            <div class="card-body light-blue">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. ADMIN MERN APP
              </p>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                  >
                    App
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                  >
                    Code
                  </button>
                </div>
            </div>
          </div>
        </div>

        <div class="col text-center">
          <div class="card shadow-xl border-dark">
            <div class="card-body light-blue">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. ADMIN MERN APP
              </p>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                  >
                    App
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                  >
                    Code
                  </button>
                </div>
            </div>
          </div>
        </div>

        <div class="col text-center">
          <div class="card shadow-xl border-dark">
            <div class="card-body light-blue">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. ADMIN MERN APP
              </p>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                  >
                    App
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-primary"
                  >
                    Code
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
