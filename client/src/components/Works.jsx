import React from "react";

function Works() {
  return (
    <div className="container sky my-5 px-5 shadow-ext" id="portfolio">
      <h1 className="display-5 fw-bold text-center">Portfolio</h1>
      <img
        className="d-block mx-auto mb-4 mt-3"
        src={process.env.PUBLIC_URL + "/images/divider.svg"}
        alt="divider"
      />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3 my-5">
        <div className="col text-center">
          <div className="card" style={{ backgroundColor: "#28b5b5", border:0 }}>
            <img
              className="d-block mx-auto sky my-4"
              src={process.env.PUBLIC_URL + "/images/admin.png"}
              alt="coder"
              width="150"
              height="150"
            />
            <div className="card-body sky">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. ADMIN MERN APP
              </p>
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-primary">
                  App
                </button>
                <button type="button" className="btn btn-sm btn-outline-primary">
                  Code
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col text-center">
          <div className="card" style={{ backgroundColor: "#28b5b5",border:0 }}>
            <img
              className="d-block mx-auto sky my-4"
              src={process.env.PUBLIC_URL + "/images/tindog.png"}
              alt="coder"
              width="150"
              height="150"
            />
            <div className="card-body sky">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. BLOG
              </p>
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-primary">
                  App
                </button>
                <button type="button" className="btn btn-sm btn-outline-primary">
                  Code
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col text-center">
          <div className="card" style={{ backgroundColor: "#28b5b5",border:0 }}>
            <img
              className="d-block mx-auto sky my-4"
              src={process.env.PUBLIC_URL + "/images/blog.png"}
              alt="coder"
              width="150"
              height="150"
            />
            <div className="card-body sky">
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer. TINDOG
              </p>
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-primary">
                  App
                </button>
                <button type="button" className="btn btn-sm btn-outline-primary">
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
