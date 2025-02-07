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
        padding: "20px 0", // Reducido de 30px
        fontFamily: "Montserrat, sans-serif", // Cambiado a Montserrat para mejor legibilidad
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
                marginBottom: "8px", // Reducido de 10px
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <h5
                style={{
                  color: "#4CAF50",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "24px", // Reducido de 28px
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100%",
                  marginBottom: "0px",
                }}
              >
                Dirección
              </h5>
            </Row>
            <ul
              className="nc-icon-ul"
              style={{ padding: 0, listStyle: "none" }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <i className="icon-alinambi nc-icon nc-pin-3 x2"></i>
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px", // Reducido de 20px
                    fontWeight: "normal",
                    marginLeft: "8px", // Reducido de 12px
                  }}
                >
                  Calle Panzaleo - E8-213
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <i className="icon-alinambi nc-icon nc-map-big x2"></i>
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: "normal",
                    marginLeft: "8px",
                  }}
                >
                  Conocoto - Ecuador
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <i className="icon-alinambi nc-icon nc-send x2"></i>
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: "normal",
                    marginLeft: "8px",
                  }}
                >
                  (02) 234 - 4544 / 099 542 1432
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <i className="icon-alinambi nc-icon nc-email-85 x2"></i>
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: "normal",
                    marginLeft: "8px",
                  }}
                >
                  ueefalinambi@gmail.com
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <i className="icon-alinambi nc-icon nc-globe x2"></i>
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: "normal",
                    marginLeft: "8px",
                  }}
                >
                  www.uealinambi.com
                </span>
              </li>
            </ul>
          </Col>

          {/* Segunda columna: Somos Aliñambi */}
          <Col md="4">
            <Row
              style={{
                borderBottom: "2px solid #83A83F",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70%",
                marginBottom: "8px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <h5
                style={{
                  color: "#4CAF50",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "24px",
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100%",
                  marginBottom: "0px",
                }}
              >
                Somos Aliñambi
              </h5>
            </Row>
            <ul
              className="nc-icon-ul"
              style={{ padding: 0, listStyle: "none" }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <i className="icon-alinambi nc-icon nc-single-02 x2"></i>
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: "normal",
                    marginLeft: "8px",
                  }}
                >
                  Nuestro Equipo
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <i className="icon-alinambi nc-icon nc-hat-3 x2"></i>
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: "normal",
                    marginLeft: "8px",
                  }}
                >
                  Admisiones
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <i className="icon-alinambi nc-icon nc-bank x2"></i>
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: "normal",
                    marginLeft: "8px",
                  }}
                >
                  Convenios
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <i className="icon-alinambi nc-icon nc-briefcase-24 x2"></i>
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: "normal",
                    marginLeft: "8px",
                  }}
                >
                  Matricula
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <i className="icon-alinambi nc-icon nc-ruler-pencil x2"></i>
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "16px",
                    fontWeight: "normal",
                    marginLeft: "8px",
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
                marginBottom: "8px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <h5
                style={{
                  color: "#4CAF50",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "24px",
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100%",
                  marginBottom: "0px",
                }}
              >
                Redes Sociales
              </h5>
            </Row>
            <div style={{ marginTop: "20px" }}>
              {" "}
              {/* Reducido de 30px */}
              <a
                href="https://www.facebook.com/p/Unidad-de-Educaci%C3%B3n-Especializada-Fiscomisional-Ali%C3%B1ambi-100070174182530/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0px 12px", color: "white" }} // Reducido el margen
              >
                <i className="fab fa-facebook-square fa-2x"></i>{" "}
                {/* Reducido de fa-3x */}
              </a>
              <a
                href="https://www.instagram.com/explore/locations/498223400195631/fundacion-alinambi-conocoto-ecuador/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0px 12px" }}
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
                  <i className="fab fa-instagram fa-2x"></i>{" "}
                  {/* Reducido de fa-3x */}
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
