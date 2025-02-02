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
import DemoFooter from "components/Footers/DemoFooter.js";

function EducacionInicialPage() {
  React.useEffect(() => {
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <div className="section">
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
            <Col md="4">
              <Card>
                <CardImg
                  alt="..."
                  src="https://via.placeholder.com/350x200"
                  top
                />
                <CardBody>
                  <CardTitle tag="h4">Metodología</CardTitle>
                  <CardText>
                    <ul>
                      <li>Aprendizaje basado en el juego</li>
                      <li>Desarrollo de la creatividad</li>
                      <li>Estimulación temprana</li>
                      <li>Educación personalizada</li>
                      <li>Desarrollo socioemocional</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardImg
                  alt="..."
                  src="https://via.placeholder.com/350x200"
                  top
                />
                <CardBody>
                  <CardTitle tag="h4">Áreas de Desarrollo</CardTitle>
                  <CardText>
                    <ul>
                      <li>Desarrollo motor grueso y fino</li>
                      <li>Desarrollo del lenguaje</li>
                      <li>Desarrollo cognitivo</li>
                      <li>Desarrollo social y emocional</li>
                      <li>Expresión artística</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <CardImg
                  alt="..."
                  src="https://via.placeholder.com/350x200"
                  top
                />
                <CardBody>
                  <CardTitle tag="h4">Servicios Complementarios</CardTitle>
                  <CardText>
                    <ul>
                      <li>Psicología infantil</li>
                      <li>Terapia de lenguaje</li>
                      <li>Nutrición balanceada</li>
                      <li>Actividades extracurriculares</li>
                      <li>Transporte escolar</li>
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
                  <h3 className="text-white">Horarios y Niveles</h3>
                  <Row>
                    <Col md="6">
                      <h5 className="text-white">Inicial 1 (3 años)</h5>
                      <ul className="text-white">
                        <li>Jornada matutina: 8:00 AM - 12:30 PM</li>
                        <li>Grupos reducidos</li>
                        <li>Docentes especializados</li>
                      </ul>
                    </Col>
                    <Col md="6">
                      <h5 className="text-white">Inicial 2 (4 años)</h5>
                      <ul className="text-white">
                        <li>Jornada matutina: 8:00 AM - 12:30 PM</li>
                        <li>Preparación para Primaria</li>
                        <li>Actividades de integración</li>
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

export default EducacionInicialPage; 