import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Progress,
} from "reactstrap";

// components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import MatriculaHeader from "components/Headers/MatriculaHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function MatriculaPage() {
  React.useEffect(() => {
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <MatriculaHeader />
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
              <h2 className="text-center title">Proceso de Matrícula</h2>
              <h5 className="text-center description">
                Conoce los pasos y requisitos necesarios para matricular a tu
                hijo/a en nuestra institución educativa.
              </h5>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="12">
              <Card className="card-plain">
                <CardBody>
                  <h3>Progreso del Proceso</h3>
                  <div className="progress-container">
                    <span className="progress-badge">Paso 1</span>
                    <Progress max="100" value="100">
                      <span className="progress-value">Documentación</span>
                    </Progress>
                  </div>
                  <div className="progress-container">
                    <span className="progress-badge">Paso 2</span>
                    <Progress max="100" value="100">
                      <span className="progress-value">Pago</span>
                    </Progress>
                  </div>
                  <div className="progress-container">
                    <span className="progress-badge">Paso 3</span>
                    <Progress max="100" value="100">
                      <span className="progress-value">Confirmación</span>
                    </Progress>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="4">
              <Card className="card-plain">
                <CardBody>
                  <CardTitle tag="h4">Documentación Requerida</CardTitle>
                  <ul className="list-unstyled">
                    <li>• Formulario de matrícula</li>
                    <li>• Documentos de identidad</li>
                    <li>• Certificados académicos</li>
                    <li>• Certificado médico</li>
                    <li>• Fotos tamaño carnet</li>
                  </ul>
                  <Button
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Descargar Formularios
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-plain">
                <CardBody>
                  <CardTitle tag="h4">Formas de Pago</CardTitle>
                  <ul className="list-unstyled">
                    <li>• Transferencia bancaria</li>
                    <li>• Tarjeta de crédito</li>
                    <li>• Débito directo</li>
                    <li>• Pago en efectivo</li>
                    <li>• Convenios de pago</li>
                  </ul>
                  <Button
                    className="btn-round"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Realizar Pago
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-plain">
                <CardBody>
                  <CardTitle tag="h4">Fechas Importantes</CardTitle>
                  <ul className="list-unstyled">
                    <li>• Inicio de matrículas: 1 de julio</li>
                    <li>• Matrículas ordinarias: julio</li>
                    <li>• Matrículas extraordinarias: agosto</li>
                    <li>• Inicio de clases: septiembre</li>
                    <li>• Inducción: última semana agosto</li>
                  </ul>
                  <Button
                    className="btn-round"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Ver Calendario
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="12">
              <Card className="bg-info">
                <CardBody>
                  <h3 className="text-white text-center">¿Necesitas ayuda?</h3>
                  <p className="text-white text-center">
                    Nuestro equipo de admisiones está disponible para ayudarte
                    en todo el proceso. Contáctanos para resolver tus dudas.
                  </p>
                  <div className="text-center">
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

export default MatriculaPage;
