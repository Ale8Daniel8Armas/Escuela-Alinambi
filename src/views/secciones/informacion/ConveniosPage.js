import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

// components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ConveniosHeader from "components/Headers/ConveniosHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ConveniosPage() {
  React.useEffect(() => {
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <ConveniosHeader />
      <div className="section">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <h2 className="text-center title">Convenios Institucionales</h2>
              <h5 className="text-center description">
                Mantenemos alianzas estratégicas con instituciones nacionales e internacionales
                para enriquecer la experiencia educativa de nuestros estudiantes.
              </h5>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="4">
              <Card>
                <CardImg
                  alt="Convenios Académicos"
                  src={require("assets/img/Alinambi/fotoAlinambiUno.jpg")}
                  top
                />
                <CardBody className="bg-info">
                  <CardTitle tag="h4" className="text-white">Convenios Académicos</CardTitle>
                  <CardText className="text-white">
                    <ul>
                      <li>Pontificia Universidad Católica del Ecuador (PUCE)</li>
                      <li>Universidad de las Fuerzas Armadas (ESPE)</li>
                      <li>Instituto Tecnológico Rumiñahui</li>
                      <li>Programas de intercambio</li>
                      <li>Certificaciones internacionales</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardImg
                  alt="Convenios Deportivos"
                  src={require("assets/img/Alinambi/fotoAlinambiDos.jpg")}
                  top
                />
                <CardBody className="bg-info">
                  <CardTitle tag="h4" className="text-white">Convenios Deportivos</CardTitle>
                  <CardText className="text-white">
                    <ul>
                      <li>Clubes deportivos locales</li>
                      <li>Federaciones deportivas</li>
                      <li>Competencias intercolegiales</li>
                      <li>Escuelas de formación</li>
                      <li>Eventos deportivos nacionales</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardImg
                  alt="Convenios Culturales"
                  src={require("assets/img/Alinambi/fotoAlinambiTres.jpg")}
                  top
                />
                <CardBody className="bg-info">
                  <CardTitle tag="h4" className="text-white">Convenios Culturales</CardTitle>
                  <CardText className="text-white">
                    <ul>
                      <li>Centros culturales</li>
                      <li>Museos y galerías</li>
                      <li>Escuelas de arte</li>
                      <li>Programas de teatro</li>
                      <li>Intercambios culturales</li>
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
                  <h3 className="text-white text-center">Beneficios para Estudiantes</h3>
                  <Row>
                    <Col md="4">
                      <h5 className="text-white text-center">Académicos</h5>
                      <ul className="text-white">
                        <li>Acceso a recursos educativos</li>
                        <li>Programas de mentoría</li>
                        <li>Becas y descuentos</li>
                      </ul>
                    </Col>
                    <Col md="4">
                      <h5 className="text-white text-center">Deportivos</h5>
                      <ul className="text-white">
                        <li>Uso de instalaciones</li>
                        <li>Entrenamiento especializado</li>
                        <li>Participación en torneos</li>
                      </ul>
                    </Col>
                    <Col md="4">
                      <h5 className="text-white text-center">Culturales</h5>
                      <ul className="text-white">
                        <li>Talleres artísticos</li>
                        <li>Eventos culturales</li>
                        <li>Exposiciones y muestras</li>
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

export default ConveniosPage;
