import React, { useRef } from "react";

function Contact() {
  
  return (
    <div class="container-fluid px-4 py-5 purple">
      <h1 className="display-5 fw-bold mb-3 name text-center" style={{paddingTop:0}}>
        Contactame!
      </h1>
      <img
        className="d-block mx-auto mb-4 mt-3"
        src={process.env.PUBLIC_URL + "/images/divider.svg"}
        alt="divider"
      />
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 py-5">
        <div class="col">
          <div>
            <img
              className="d-block mx-auto"
              src={process.env.PUBLIC_URL + "/images/whatsapp.svg"}
              alt="whatsapp contacto mensaje"
              width="25%"
              height="25%"
            />
          </div>
          <div>
            <h4 class="fw-bold d-block text-center mt-4 white-text">
              Whatsapp
            </h4>
            <h5 className="d-block text-center white-text"><a href="https://wa.me/1133994380?text=Hola%Joaquin%te%contacto%desde%tu%portfolio">+54 11-3399-4380</a></h5>
          </div>
        </div>
        <div class="col">
          <div>
            <img
              className="d-block mx-auto"
              src={process.env.PUBLIC_URL + "/images/gmail.svg"}
              alt="gmail mensaje contacto"
              width="25%"
              height="25%"
            />
          </div>
          <div>
            <h4 class="fw-bold d-block text-center mt-4 white-text">Gmail</h4>
            <h5 className="d-block text-center white-text">
              <a href="mailto:joaquindamianseita@gmail.com"> joaquindamianseita@gmail.com</a>
            </h5>
          </div>
        </div>
        <div class="col">
          <div>
            <img
              className="d-block mx-auto"
              src={process.env.PUBLIC_URL + "/images/linkedin.svg"}
              alt="linkedin mensaje trabajo"
              width="25%"
              height="25%"
            />
          </div>
          <div>
            <h4 class="fw-bold d-block text-center mt-4 white-text">
              Linkedin
            </h4>
            <h5 className="d-block text-center white-text"><a href="https://www.linkedin.com/in/joaquindamianseita/">/joaquindamianseita</a></h5>
          </div>
        </div>
        <div class="col">
          <div>
            <img
              className="d-block mx-auto"
              src={process.env.PUBLIC_URL + "/images/github.svg"}
              alt="github codigo"
              width="25%"
              height="25%"
            />
          </div>
          <div>
            <h4 class="fw-bold d-block text-center mt-4 white-text">Github</h4>
            <h5 className="d-block text-center white-text"><a href="https://github.com/JoaquinDamianSeita">/JoaquinDamianSeita</a></h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
