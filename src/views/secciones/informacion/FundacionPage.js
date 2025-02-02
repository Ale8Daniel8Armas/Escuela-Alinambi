import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button
} from "reactstrap";

// components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import FundacionHeader from "components/Headers/FundacionHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function FundacionPage() {
  React.useEffect(() => {
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <FundacionHeader />
      <div className="section">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <h2 className="text-center title">Nuestra Historia</h2>
              <h5 className="text-center description">
                Conoce la trayectoria y los valores que han forjado nuestra institución
                a lo largo de los años.
              </h5>
              <div className="text-center mt-4">
                <Button
                  className="btn-round"
                  color="info"
                  href="https://lorenzojumbo.wixsite.com/fualinambi/nosotros"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar Fundación Alinambi
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="6">
              <Card>
                <CardImg
                  alt="Historia"
                  src={require("assets/img/Alinambi/fotoAlinambiUno.jpg")}
                  top
                />
                <CardBody>
                  <CardTitle tag="h4">Fundación y Trayectoria</CardTitle>
                  <CardText>
                    <p>
                      La Unidad Educativa Alinambi fue fundada con el propósito de brindar
                      una educación integral y de calidad a la comunidad. Desde sus inicios,
                      ha mantenido un compromiso inquebrantable con la excelencia académica
                      y la formación en valores.
                    </p>
                    <ul>
                      <li>Fundación: 1990</li>
                      <li>Primera promoción: 1996</li>
                      <li>Acreditación internacional: 2005</li>
                      <li>Renovación infraestructura: 2015</li>
                      <li>Innovación tecnológica: 2020</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardImg
                  alt="Valores"
                  src={require("assets/img/Alinambi/fotoAlinambiDos.jpg")}
                  top
                />
                <CardBody>
                  <CardTitle tag="h4">Valores Institucionales</CardTitle>
                  <CardText>
                    <p>
                      Nuestros valores son el pilar fundamental que guía todas nuestras
                      acciones y decisiones, formando estudiantes íntegros y comprometidos
                      con la sociedad.
                    </p>
                    <ul>
                      <li>Excelencia académica</li>
                      <li>Integridad y honestidad</li>
                      <li>Responsabilidad social</li>
                      <li>Innovación y creatividad</li>
                      <li>Respeto y tolerancia</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="4">
              <Card className="card-plain bg-info">
                <CardBody>
                  <CardTitle tag="h4" className="text-white">Misión</CardTitle>
                  <CardText className="text-white">
                    Formar estudiantes integrales con excelencia académica, valores sólidos
                    y compromiso social, preparados para enfrentar los desafíos del mundo
                    contemporáneo y contribuir positivamente a la sociedad.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-plain bg-info">
                <CardBody>
                  <CardTitle tag="h4" className="text-white">Visión</CardTitle>
                  <CardText className="text-white">
                    Ser reconocidos como una institución educativa líder en innovación
                    pedagógica, formación integral y compromiso con la excelencia,
                    inspirando a las futuras generaciones a alcanzar su máximo potencial.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-plain bg-info">
                <CardBody>
                  <CardTitle tag="h4" className="text-white">Objetivos</CardTitle>
                  <CardText className="text-white">
                    <ul>
                      <li>Excelencia académica</li>
                      <li>Formación integral</li>
                      <li>Innovación educativa</li>
                      <li>Desarrollo sostenible</li>
                      <li>Vinculación comunitaria</li>
                    </ul>
                  </CardText>
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

export default FundacionPage;
