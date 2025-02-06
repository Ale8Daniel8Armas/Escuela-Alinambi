import React from "react";
import { Container, Row, Col } from "reactstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";

function DemoFooter() {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#23294A",
        color: "white",
        padding: "30px 0",
        fontFamily: "serif",
        textAlign: "center",
      }}
    >
      <Container>
        <Row>
          {/* Primera columna: Dirección */}
          <Col md="4">
            <Row
              style={{
                borderBottom: "2px solid #83A83F",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                marginBottom: "10px",
                marginLeft: "55px",
              }}
            >
              <h5
                style={{
                  color: "#4CAF50",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "28px",
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100%",
                  marginBottom: "0px",
                }}
              >
                Dirección
              </h5>
            </Row>
            <ul className="nc-icon-ul">
              <li style={{ display: "flex", alignItems: "center" }}>
                <i
                  aria-hidden="true"
                  class="icon-alinambi nc-icon nc-pin-3 x2"
                ></i>
                <span
                  style={{
                    fontStyle: "serif",
                    fontFamily: "serif",
                    fontSize: "20px",
                    fontWeight: "normal",
                    marginLeft: "12px",
                  }}
                >
                  Calle Panzaleo - E8-213
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <i
                  aria-hidden="true"
                  class="icon-alinambi nc-icon nc-map-big x2"
                ></i>{" "}
                <span
                  style={{
                    fontStyle: "serif",
                    fontFamily: "serif",
                    fontSize: "20px",
                    fontWeight: "normal",
                    marginLeft: "12px",
                  }}
                >
                  Conocoto - Ecuador
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <i
                  aria-hidden="true"
                  class="icon-alinambi nc-icon nc-send x2"
                ></i>{" "}
                <span
                  style={{
                    fontStyle: "serif",
                    fontFamily: "serif",
                    fontSize: "20px",
                    fontWeight: "normal",
                    marginLeft: "12px",
                  }}
                >
                  (02) 234 - 4544 / 099 542 1432
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <i
                  aria-hidden="true"
                  class="icon-alinambi nc-icon nc-email-85 x2"
                ></i>{" "}
                <span
                  style={{
                    fontStyle: "serif",
                    fontFamily: "serif",
                    fontSize: "20px",
                    fontWeight: "normal",
                    marginLeft: "12px",
                  }}
                >
                  ueefalinambi@gmail.com
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <i
                  aria-hidden="true"
                  class="icon-alinambi nc-icon nc-globe x2"
                ></i>{" "}
                <span
                  style={{
                    fontStyle: "serif",
                    fontFamily: "serif",
                    fontSize: "20px",
                    fontWeight: "normal",
                    marginLeft: "12px",
                  }}
                >
                  www.uealinambi.com
                </span>
              </li>
            </ul>
          </Col>

          {/* Segunda columna: Contacto (con borde) */}
          <Col md="4">
            <Row
              style={{
                borderBottom: "2px solid #83A83F",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70%",
                marginBottom: "10px",
                marginLeft: "87px",
              }}
            >
              <h5
                style={{
                  color: "#4CAF50",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "28px",
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100%",
                  marginBottom: "0px",
                }}
              >
                Somos Aliñambi
              </h5>
            </Row>
            <ul className="nc-icon-ul" style={{ marginLeft: "86px" }}>
              <li style={{ display: "flex", alignItems: "center" }}>
                <i
                  aria-hidden="true"
                  class="icon-alinambi nc-icon nc-single-02 x2"
                ></i>
                <span
                  style={{
                    fontStyle: "serif",
                    fontFamily: "serif",
                    fontSize: "20px",
                    fontWeight: "normal",
                    marginLeft: "12px",
                  }}
                >
                  Nuestro Equipo
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <i
                  aria-hidden="true"
                  class="icon-alinambi nc-icon nc-hat-3 x2"
                ></i>{" "}
                <span
                  style={{
                    fontStyle: "serif",
                    fontFamily: "serif",
                    fontSize: "20px",
                    fontWeight: "normal",
                    marginLeft: "12px",
                  }}
                >
                  Admisiones
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <i
                  aria-hidden="true"
                  class="icon-alinambi nc-icon nc-bank x2"
                ></i>{" "}
                <span
                  style={{
                    fontStyle: "serif",
                    fontFamily: "serif",
                    fontSize: "20px",
                    fontWeight: "normal",
                    marginLeft: "12px",
                  }}
                >
                  Convenios
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <i
                  aria-hidden="true"
                  class="icon-alinambi nc-icon nc-briefcase-24 x2"
                ></i>{" "}
                <span
                  style={{
                    fontStyle: "serif",
                    fontFamily: "serif",
                    fontSize: "20px",
                    fontWeight: "normal",
                    marginLeft: "12px",
                  }}
                >
                  Matricula
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <i
                  aria-hidden="true"
                  class="icon-alinambi nc-icon nc-ruler-pencil x2"
                ></i>{" "}
                <span
                  style={{
                    fontStyle: "serif",
                    fontFamily: "serif",
                    fontSize: "20px",
                    fontWeight: "normal",
                    marginLeft: "12px",
                  }}
                >
                  Servicios
                </span>
              </li>
            </ul>
          </Col>

          {/* Tercera columna: Redes Sociales */}
          <Col md="4">
            <Row
              style={{
                borderBottom: "2px solid #83A83F",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70%",
                marginBottom: "10px",
                marginLeft: "55px",
              }}
            >
              <h5
                style={{
                  color: "#4CAF50",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "28px",
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100%",
                  marginBottom: "0px",
                }}
              >
                Redes Sociales
              </h5>
            </Row>
            <div style={{ marginTop: "30px" }}>
              <a
                href="https://www.facebook.com/p/Unidad-de-Educaci%C3%B3n-Especializada-Fiscomisional-Ali%C3%B1ambi-100070174182530/?locale=es_LA"
                target="_blank"
                style={{ margin: "0px 17px 10px 17px", color: "white" }}
              >
                <i className="fab fa-facebook-square fa-3x"></i>
              </a>
              <a
                href="https://www.instagram.com/explore/locations/498223400195631/fundacion-alinambi-conocoto-ecuador/"
                target="_blank"
                style={{
                  margin: "0px 17px 10px 17px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    background:
                      "linear-gradient(to right, #f58529, #dd2a7b, #8134af, #515bd4)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  <i className="fab fa-instagram fa-3x" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
