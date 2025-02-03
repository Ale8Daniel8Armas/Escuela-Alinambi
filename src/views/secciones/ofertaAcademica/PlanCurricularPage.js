import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

// components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import PlanCurricularHeader from "components/Headers/PlanCurricularHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function PlanCurricularPage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  React.useEffect(() => {
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <PlanCurricularHeader />
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
              <h2 className="text-center title">
                Plan Curricular Institucional
              </h2>
              <h5 className="text-center description">
                Nuestro plan curricular está diseñado para formar estudiantes
                integrales, con sólidos conocimientos académicos y valores
                humanos.
              </h5>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="ml-auto mr-auto" md="10">
              <Nav className="justify-content-center" role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Fundamentos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Metodología
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Evaluación
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardBody>
                          <CardTitle tag="h4">Principios Pedagógicos</CardTitle>
                          <ul>
                            <li>Educación centrada en el estudiante</li>
                            <li>Aprendizaje significativo y contextualizado</li>
                            <li>Desarrollo de competencias</li>
                            <li>Formación en valores</li>
                            <li>Innovación educativa</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardBody>
                          <CardTitle tag="h4">Ejes Transversales</CardTitle>
                          <ul>
                            <li>Educación en valores</li>
                            <li>Pensamiento crítico</li>
                            <li>Competencias digitales</li>
                            <li>Cuidado del medio ambiente</li>
                            <li>Responsabilidad social</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardBody>
                          <CardTitle tag="h4">
                            Estrategias de Enseñanza
                          </CardTitle>
                          <ul>
                            <li>Aprendizaje basado en proyectos</li>
                            <li>Trabajo colaborativo</li>
                            <li>Uso de tecnología educativa</li>
                            <li>Investigación y experimentación</li>
                            <li>Desarrollo del pensamiento</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardBody>
                          <CardTitle tag="h4">Recursos Educativos</CardTitle>
                          <ul>
                            <li>Plataformas digitales</li>
                            <li>Laboratorios especializados</li>
                            <li>Material didáctico innovador</li>
                            <li>Biblioteca virtual</li>
                            <li>Espacios de aprendizaje flexibles</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardBody>
                          <CardTitle tag="h4">Sistema de Evaluación</CardTitle>
                          <ul>
                            <li>Evaluación diagnóstica</li>
                            <li>Evaluación formativa</li>
                            <li>Evaluación sumativa</li>
                            <li>Autoevaluación y coevaluación</li>
                            <li>Rúbricas de desempeño</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-plain">
                        <CardBody>
                          <CardTitle tag="h4">Seguimiento Académico</CardTitle>
                          <ul>
                            <li>Tutorías personalizadas</li>
                            <li>Reportes de progreso</li>
                            <li>Acompañamiento estudiantil</li>
                            <li>Refuerzo académico</li>
                            <li>Comunicación con padres</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default PlanCurricularPage;
