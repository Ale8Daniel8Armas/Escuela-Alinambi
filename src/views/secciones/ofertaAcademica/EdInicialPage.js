import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

// components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import EdInicialHeader from "components/Headers/EdInicialHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function EdInicialPage() {
  React.useEffect(() => {
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <EdInicialHeader />
      <div
        className="section"
        style={{
          backgroundImage:
            "url(" + require("assets/img/Alinambi/Wallpaper.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          paddingTop: "0",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <h2
                className="text-center"
                style={{
                  fontSize: "33px",
                  fontWeight: "bold",
                  color: "#1E90FF",
                  letterSpacing: "1.5px",
                  marginBottom: "15px",
                  textTransform: "uppercase",
                  marginTop: "35px",
                }}
              >
                Educación Inicial
              </h2>
              <h5
                className="text-center justify-content-center description"
                style={{
                  fontSize: "22px",
                  color: "black",
                  marginTop: "30px",
                  fontWeight: "500",
                }}
              >
                Formamos a nuestros pequeños estudiantes en un ambiente seguro,
                estimulante y lleno de amor, desarrollando sus habilidades y
                competencias de manera integral.
              </h5>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="6">
              <Card>
                <CardImg
                  alt="Inicial 2 - 4 años"
                  src={require("assets/img/Alinambi/fotoAlinambiTres.jpg")}
                  top
                />
                <CardBody
                  style={{ backgroundColor: "rgba(58, 241, 180, 0.93)" }}
                >
                  <CardTitle
                    tag="h3"
                    className="text-white text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    <b style={{ color: "#343a40" }}>Inicial 2 (4 años)</b>
                  </CardTitle>
                  <br />
                  <CardText className="text-white">
                    <ul style={{ fontWeight: "bold" }}>
                      <li>Desarrollo motriz fino y grueso</li>
                      <li>Iniciación a la lectoescritura</li>
                      <li>Expresión artística y musical</li>
                      <li>Desarrollo socioemocional</li>
                      <li>Inglés básico</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardImg
                  alt="Preparatoria - 5 años"
                  src={require("assets/img/Alinambi/fotoAlinambiCuatro.jpg")}
                  top
                />
                <CardBody
                  style={{ backgroundColor: "rgba(20, 114, 83, 0.93)" }}
                >
                  <CardTitle
                    tag="h3"
                    className="text-white text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    <b style={{ color: "#343a40" }}>Preparatoria (5 años)</b>
                  </CardTitle>
                  <br />
                  <CardText className="text-white">
                    <ul style={{ fontWeight: "bold" }}>
                      <li>Lectoescritura avanzada</li>
                      <li>Pensamiento lógico-matemático</li>
                      <li>Desarrollo de la creatividad</li>
                      <li>Habilidades sociales</li>
                      <li>Inglés intermedio</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="12">
              <Card className="card-plain bg-primary">
                <CardBody className="p-4">
                  <h3
                    className="text-white text-center"
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.75rem",
                      marginBottom: "2rem",
                    }}
                  >
                    Horarios y Metodología
                  </h3>
                  <Row>
                    <Col md="6">
                      <h5
                        className="text-white text-center"
                        style={{
                          fontWeight: "bold",
                          fontSize: "1.50rem",
                          marginBottom: "1rem",
                        }}
                      >
                        Horario
                      </h5>
                      <ul
                        className="text-white"
                        style={{ paddingLeft: "40px", fontSize: "1.05rem" }}
                      >
                        <li>Jornada matutina: 8:00 AM - 12:30 PM</li>
                        <li>Grupos reducidos</li>
                        <li>Docentes especializados</li>
                      </ul>
                    </Col>
                    <Col md="6">
                      <h5
                        className="text-white text-center"
                        style={{
                          fontWeight: "bold",
                          fontSize: "1.50rem",
                          marginBottom: "1rem",
                        }}
                      >
                        Metodología
                      </h5>
                      <ul
                        className="text-white"
                        style={{ paddingLeft: "40px", fontSize: "1.05rem" }}
                      >
                        <li>Aprendizaje basado en el juego</li>
                        <li>Estimulación temprana</li>
                        <li>Educación personalizada</li>
                      </ul>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default EdInicialPage;
