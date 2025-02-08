import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  CardImg,
} from "reactstrap";

// components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import AdmisionesHeader from "components/Headers/AdmisionesHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function AdmisionesPage() {
  React.useEffect(() => {
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <AdmisionesHeader />
      <div
        className="section section-dark"
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
                Admisiones Alinambi - Proceso e Información
              </h2>
              <h5
                className="text-center description justify-content-center description"
                style={{
                  fontSize: "22px",
                  color: "black",
                  marginTop: "30px",
                  fontWeight: "500",
                }}
              >
                La Unidad Educativa Alinambi ofrece una educación de excelencia
                centrada en el estudiante para formar seres competentes,
                críticos y sensibles a diferentes perspectivas, que contribuyan
                a un mundo más justo, equitativo y solidario.
              </h5>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md="6">
              <Card>
                <CardImg
                  alt="Inicial 2"
                  src={require("assets/img/Alinambi/fotoAlinambiTres.jpg")}
                  top
                />

                <CardBody
                  style={{ backgroundColor: "rgba(247, 143, 8, 0.93)" }}
                >
                  <CardTitle
                    tag="h3"
                    className="text-white text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    Inicial 2
                  </CardTitle>
                  <br />
                  <p className="text-white" style={{ fontWeight: "normal" }}>
                    Ofrecemos educación para niños de 4 años, con un programa
                    educativo que incluye:
                  </p>
                  <ul className="text-white">
                    <li>Desarrollo motriz y sensorial</li>
                    <li>Iniciación a la lectoescritura</li>
                    <li>Expresión artística y musical</li>
                    <li>Desarrollo socioemocional</li>
                    <li>Inglés básico</li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardImg
                  alt="Educación General Basica (hasta 7mo grado)"
                  src={require("assets/img/Alinambi/fotoAlinambiCuatro.jpg")}
                  top
                />
                <CardBody
                  style={{ backgroundColor: "rgba(48, 146, 23, 0.93)" }}
                >
                  <CardTitle
                    tag="h3"
                    className="text-white text-center"
                    style={{ fontWeight: "bold" }}
                  >
                    Educación Básica
                  </CardTitle>
                  <br />
                  <p className="text-white" style={{ fontWeight: "normal" }}>
                    Formación integral para estudiantes de educación básica
                    elemental y media hasta séptimo grado:
                  </p>
                  <ul className="text-white">
                    <li>Materias básicas del currículo nacional</li>
                    <li>Programa avanzado de inglés</li>
                    <li>Desarrollo de pensamiento lógico-matemático</li>
                    <li>Proyectos de investigación</li>
                    <li>Actividades deportivas y culturales</li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md="6">
              <Card
                className="card-plain"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "10px",
                }}
              >
                <CardBody>
                  <CardTitle
                    tag="h4"
                    className="text-center"
                    style={{
                      fontWeight: "bold",
                      color: "#343a40",
                    }}
                  >
                    <b style={{ color: "#343a40" }}>Proceso de Inscripción</b>
                  </CardTitle>
                  <ol
                    style={{
                      fontSize: "18px",
                      color: "black",
                      marginTop: "10px",
                      fontWeight: "400",
                    }}
                  >
                    <li>Llenar formulario de inscripción en línea</li>
                    <li>Presentar documentación requerida</li>
                    <li>Entrevista con el departamento psicológico</li>
                    <li>Evaluación diagnóstica</li>
                    <li>Entrevista con coordinación académica</li>
                    <li>Resultados de admisión</li>
                    <li>Proceso de matrícula</li>
                  </ol>
                  <Button
                    className="btn-round d-flex justify-content-center"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Contáctanos
                  </Button>
                </CardBody>
              </Card>
            </Col>

            <Col md="6">
              <Card
                className="card-plain"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "10px",
                }}
              >
                <CardBody>
                  <CardTitle
                    tag="h4"
                    className="text-center"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    <b style={{ color: "#343a40" }}>Documentación Requerida</b>
                  </CardTitle>
                  <ul
                    style={{
                      fontSize: "18px",
                      color: "black",
                      marginTop: "10px",
                      fontWeight: "400",
                    }}
                  >
                    <li>Partida de nacimiento</li>
                    <li>Cédula de identidad del estudiante y representantes</li>
                    <li> Certificados de promoción anteriores</li>
                    <li> Certificado de conducta</li>
                    <li> Certificado médico</li>
                    <li> 4 fotografías tamaño carnet</li>
                    <li> Carnet de vacunación</li>
                  </ul>
                  <Button
                    className="btn-round d-flex justify-content-center"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Descargar Lista Completa
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md="12">
              <Card className="card-plain bg-primary">
                <CardBody>
                  <h3 className="text-white text-center">
                    Información de Contacto
                  </h3>
                  <Row>
                    <Col md="6" className="text-center">
                      <h5 className="text-white">Dirección</h5>
                      <p className="text-white">
                        Calle Panzaleo E8-203, sector Fajardo
                        <br />
                        Sangolquí - Ecuador
                      </p>
                    </Col>
                    <Col md="6" className="text-center">
                      <h5 className="text-white">Contacto</h5>
                      <p className="text-white">
                        Teléfonos: 02-2344-544
                        <br />
                        Email: alinambiuio@yahoo.com
                      </p>
                    </Col>
                  </Row>
                  <div className="text-center mt-3">
                    <Button
                      className="btn-round"
                      color="neutral"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Contactar Admisiones
                    </Button>
                  </div>
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

export default AdmisionesPage;
