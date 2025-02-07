import React from "react";
import "assets/css/paper-kit.css";

// reactstrap components
import { Container } from "reactstrap";

function CronogramasHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/Alinambi/PortadaGeneral.jpg") + ")",
          minHeight: "600px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Cronograma Académico</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Organiza tu año lectivo con nuestro calendario de actividades
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

export default CronogramasHeader;
