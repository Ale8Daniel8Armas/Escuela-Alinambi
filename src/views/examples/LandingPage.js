import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h1
                  className="WelcomeTitle"
                  style={{ fontSize: "48px", fontWeight: "bold" }}
                >
                  Bienvenidos a la Unidad Educativa Aliñambi
                </h1>
                <p
                  className="Descripcion"
                  style={{ fontSize: "20px", marginTop: "10px" }}
                >
                  Formando líderes con excelencia académica, valores y compromiso social.
                </p>
                <br />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Áreas Destacadas</h2>
            <Container>
              <Row>
                {/* Primera fila */}
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/divinoNinioAlinambi.jpg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Matriculación</h6>
                      <p>
                        Accede a información sobre el proceso de inscripción y
                        matrícula para nuevos estudiantes.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/fotoAlinambiOcho.jpg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Admisiones</h6>
                      <p>
                        Conoce los requisitos y pasos para formar parte de
                        nuestra comunidad educativa.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/fotoAlinambiVeinte.jpg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Historia</h6>
                      <p>
                        Descubre nuestra trayectoria y compromiso con la
                        educación de calidad.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/LemaAlinambi.jpeg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Servicios</h6>
                      <p>
                        Conoce los servicios que ofrecemos para garantizar un
                        aprendizaje integral.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                {/* Segunda fila */}
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/barAlinambi.jpg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Contactos</h6>
                      <p>
                        Contáctanos para resolver tus dudas y obtener más
                        información.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/agendasAlinambi.jpg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Instalaciones</h6>
                      <p>
                        Explora nuestras modernas instalaciones diseñadas para
                        el aprendizaje y desarrollo de los estudiantes.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/letreroAlinambi.jpg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Actividades</h6>
                      <p>
                        Participa en nuestras actividades extracurriculares y
                        eventos especiales.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/niñosAlinambi.jpg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Nuestra Fundación</h6>
                      <p>
                        Aprende más sobre los valores y objetivos que guían
                        nuestra institución.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default LandingPage;
