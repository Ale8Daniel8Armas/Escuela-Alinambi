import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

// components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import EdBasicaHeader from "components/Headers/EdBasicaHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function EdBasicaPage() {
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
      <EdBasicaHeader />
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
              <h2 className="text-center title">Educación General Básica</h2>
              <h5 className="text-center description">
                Formación integral basada en valores, excelencia académica y
                desarrollo de habilidades para el siglo XXI.
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
                    Básica Elemental (2do-4to)
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Básica Media (5to-7mo)
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col md="6">
                      <Card>
                        <CardImg
                          alt="Básica Elemental"
                          src={require("assets/img/Alinambi/fotoAlinambiCinco.jpg")}
                          top
                        />
                        <CardBody className="bg-info">
                          <CardTitle tag="h4" className="text-white">
                            Áreas Académicas
                          </CardTitle>
                          <ul className="text-white">
                            <li>Lengua y Literatura</li>
                            <li>Matemáticas</li>
                            <li>Ciencias Naturales</li>
                            <li>Estudios Sociales</li>
                            <li>Educación Cultural y Artística</li>
                            <li>Educación Física</li>
                            <li>Inglés</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card>
                        <CardImg
                          alt="Metodología Elemental"
                          src={require("assets/img/Alinambi/fotoAlinambiSeis.jpg")}
                          top
                        />
                        <CardBody className="bg-info">
                          <CardTitle tag="h4" className="text-white">
                            Metodología
                          </CardTitle>
                          <ul className="text-white">
                            <li>Aprendizaje significativo</li>
                            <li>Desarrollo de competencias</li>
                            <li>Trabajo colaborativo</li>
                            <li>Proyectos interdisciplinarios</li>
                            <li>Uso de tecnología educativa</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col md="6">
                      <Card>
                        <CardImg
                          alt="Básica Media"
                          src={require("assets/img/Alinambi/fotoAlinambiSiete.jpg")}
                          top
                        />
                        <CardBody className="bg-info">
                          <CardTitle tag="h4" className="text-white">
                            Plan Curricular
                          </CardTitle>
                          <ul className="text-white">
                            <li>Lengua y Literatura avanzada</li>
                            <li>Matemáticas con razonamiento lógico</li>
                            <li>Ciencias Naturales experimentales</li>
                            <li>Estudios Sociales y ciudadanía</li>
                            <li>Arte y cultura</li>
                            <li>Educación Física y salud</li>
                            <li>Inglés intermedio</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card>
                        <CardImg
                          alt="Actividades Media"
                          src={require("assets/img/Alinambi/fotoAlinambiOcho.jpg")}
                          top
                        />
                        <CardBody className="bg-info">
                          <CardTitle tag="h4" className="text-white">
                            Actividades Complementarias
                          </CardTitle>
                          <ul className="text-white">
                            <li>Clubes académicos</li>
                            <li>Proyectos de investigación</li>
                            <li>Salidas pedagógicas</li>
                            <li>Actividades deportivas</li>
                            <li>Talleres artísticos</li>
                          </ul>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="12">
              <Card className="card-plain bg-info">
                <CardBody>
                  <h3 className="text-white text-center">Horario Académico</h3>
                  <Row>
                    <Col md="6" className="text-center">
                      <h5 className="text-white">Jornada Matutina</h5>
                      <p className="text-white">
                        Lunes a Viernes
                        <br />
                        7:15 AM - 13:45 PM
                      </p>
                    </Col>
                    <Col md="6" className="text-center">
                      <h5 className="text-white">
                        Actividades Extracurriculares
                      </h5>
                      <p className="text-white">
                        Lunes a Jueves
                        <br />
                        14:00 PM - 15:30 PM
                      </p>
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

export default EdBasicaPage;
