import React from "react";
import "assets/css/paper-kit.css";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ActividadesHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/Alinambi/fotoAlinambiCuatro.jpg") +
            ")",
          minHeight: "600px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Actividades</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Sé participe de nuestras gradiosas actividades y programas
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
      </div>
    </>
  );
}

export default ActividadesHeader;
