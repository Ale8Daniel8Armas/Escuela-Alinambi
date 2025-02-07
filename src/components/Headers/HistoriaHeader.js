import React from "react";
import "assets/css/paper-kit.css";

// reactstrap components
import { Container } from "reactstrap";

// core components

function HistoriaHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/Alinambi/fotoAlinambiDos.jpg") + ")",
          minHeight: "600px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Nuestra Historia</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Conoce nuestras raíces y nuestra razón de ser
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

export default HistoriaHeader;
