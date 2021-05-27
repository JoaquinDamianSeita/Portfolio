import React from "react";

function Goodbye() {
  return (
    <div className="container-fluid goodbye-container">
      <h2 className="fw-bold d-block text-center mt-5 goodbye-title">¡Gracias por tu atención!</h2>
      <p className="d-block goodbye-text text-center desc">
        Este es mi sitio personal, está construído con React y Bootstrap el
        repositorio se encuentra disponible <a href="#"><b>aquí</b></a>. Acepto todo tipo de sugerencias,
        muchas gracias por tu tiempo.
      </p>
      <p className="d-block goodbye-text text-center desc mb-5">Saludos!</p>
    </div>
  );
}

export default Goodbye;
