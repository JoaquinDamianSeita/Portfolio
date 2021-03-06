import React from "react";

function Works() {
  return (
    <div className="container sky my-5 px-5 shadow-ext">
      <h1 className="display-5 fw-bold text-center title-cv">Portfolio</h1>
      <img
        className="d-block mx-auto mb-4 mt-3"
        src={process.env.PUBLIC_URL + "/images/divider.svg"}
        alt="divider"
      />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3 my-5 px-5">
        <div className="col text-center">
          <div
            className="card"
            style={{ backgroundColor: "#28b5b5", border: 0 }}
          >
            <img
              className="d-block mx-auto sky my-4"
              src={process.env.PUBLIC_URL + "/images/blog.svg"}
              alt="blog app"
              width="150"
              height="150"
            />
            <div className="card-body sky">
              <p className="card-text">
                BLOG permite publicar articulos o contenido personalizado con
                diversas ideas que consideres compartir con los demas.
              </p>
              <div className="btn-group">
                <a
                  target="_blank"
                  href="https://blog-mern-app-js.herokuapp.com/"
                >
                  <button type="button" className="btn-custom-boots">
                    <b className="name">App</b>
                  </button>
                </a>

                <a
                  target="_blank"
                  href="https://github.com/JoaquinDamianSeita/Blog-app-deploy"
                >
                  <button type="button" className="btn-custom-boots mx-1">
                    <b className="name">Code</b>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col text-center">
          <div
            className="card"
            style={{ backgroundColor: "#28b5b5", border: 0 }}
          >
            <img
              className="d-block mx-auto sky my-4"
              src={process.env.PUBLIC_URL + "/images/tindog.svg"}
              alt="tindog app"
              width="150"
              height="150"
            />

            <div className="card-body sky">
              <p className="card-text">
                TINDOG es la presentaci??n de una aplicacion clon de tinder pero
                orientado a encontrar la mascota perfecta para nosotros :D
              </p>
              <div className="btn-group">
                <a
                  target="_blank"
                  href="https://joaquindamianseita.github.io/TinDog-React-app/"
                >
                  <button type="button" className="btn-custom-boots">
                    <b className="name">App</b>
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/JoaquinDamianSeita/TinDog-React-app"
                >
                  <button type="button" className="btn-custom-boots mx-1">
                    <b className="name">Code</b>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col text-center">
          <div
            className="card"
            style={{ backgroundColor: "#28b5b5", border: 0 }}
          >
            <img
              className="d-block mx-auto sky my-4"
              src={process.env.PUBLIC_URL + "/images/money_4.svg"}
              alt="CuentasClaras app"
              width="150"
              height="150"
              color="#fff"
            />
            <div className="card-body sky">
              <p className="card-text">
                CUENTAS CLARAS APP es una aplicacion sencilla para administrar gastos personales.
                (Base de datos en MySQL)
              </p>
              {/* <p style={{ color: "#A01D02", fontWeight: "bold" }}>
                Pr??ximamente!
              </p> */}
              <a
                target="_blank"
                href="https://cuentas-claras-app.herokuapp.com/"
              >
                <button type="button" className="btn-custom-boots">
                  <b className="name">App</b>
                </button>
              </a>

              <a
                target="_blank"
                href="https://github.com/JoaquinDamianSeita/CuentasClaras-app"
              >
                <button type="button" className="btn-custom-boots mx-1">
                  <b className="name">Code</b>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
