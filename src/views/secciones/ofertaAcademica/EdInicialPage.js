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
              <h2 className="text-center title">Educación Inicial</h2>
              <h5 className="text-center description">
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
                <CardBody className="bg-info">
                  <CardTitle tag="h4" className="text-white">
                    Inicial 2 (4 años)
                  </CardTitle>
                  <CardText className="text-white">
                    <ul>
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
                <CardBody className="bg-info">
                  <CardTitle tag="h4" className="text-white">
                    Preparatoria (5 años)
                  </CardTitle>
                  <CardText className="text-white">
                    <ul>
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
              <Card className="card-plain bg-info">
                <CardBody>
                  <h3 className="text-white">Horarios y Metodología</h3>
                  <Row>
                    <Col md="6">
                      <h5 className="text-white">Horario</h5>
                      <ul className="text-white">
                        <li>Jornada matutina: 8:00 AM - 12:30 PM</li>
                        <li>Grupos reducidos</li>
                        <li>Docentes especializados</li>
                      </ul>
                    </Col>
                    <Col md="6">
                      <h5 className="text-white">Metodología</h5>
                      <ul className="text-white">
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
