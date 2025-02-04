import React from "react";
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import HistoriaHeader from "components/Headers/HistoriaHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function HistoriaPage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <HistoriaHeader />
      <div
        className="section profile-content"
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
          <div className="owner">
            <div className="name">
              <h4 className="title">
                Nuestra Historia <br />
              </h4>
              <h6 className="description">U.E. Aliñambi</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <p className="description">
                Una historia de excelencia educativa y compromiso con la formación integral
              </p>
              <br />
            </Col>
          </Row>
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Nuestros Orígenes
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Crecimiento y Logros
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <Card className="card-plain">
                    <CardBody>
                      <Row className="align-items-center">
                        <Col md="6">
                          <img
                            alt="Fundación"
                            className="img-rounded img-responsive"
                            src={require("assets/img/Alinambi/AlinambiInicios.jpg")}
                            style={{ width: "100%", marginBottom: "20px" }}
                          />
                        </Col>
                        <Col md="6">
                          <h4 className="title">Los Primeros Pasos</h4>
                          <p className="description">
                            La Unidad Educativa Aliñambi nació en 1985 con una visión revolucionaria 
                            para su época: crear un espacio educativo que combinara la excelencia 
                            académica con el desarrollo integral del ser humano. Nuestros fundadores 
                            iniciaron este sueño con apenas tres aulas y un puñado de estudiantes 
                            comprometidos.
                          </p>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>

                  <div className="text-center my-4">
                    <img
                      alt="separador"
                      src={require("assets/img/Alinambi/AlinambiInicios.jpg")}
                      style={{ maxWidth: "150px" }}
                    />
                  </div>

                  <Card className="card-plain">
                    <CardBody>
                      <Row className="align-items-center">
                        <Col md="6" className="order-md-2">
                          <img
                            alt="Desarrollo"
                            className="img-rounded img-responsive"
                            src={require("assets/img/Alinambi/AlinambiInicios.jpg")}
                            style={{ width: "100%", marginBottom: "20px" }}
                          />
                        </Col>
                        <Col md="6" className="order-md-1">
                          <h4 className="title">Década de los 90</h4>
                          <p className="description">
                            Durante los años 90, nuestra institución experimentó un crecimiento 
                            significativo. Implementamos programas innovadores de educación bilingüe 
                            y comenzamos a destacar en competencias académicas nacionales. La 
                            construcción de nuestro actual campus principal marcó un hito en 
                            nuestra historia, proporcionando espacios modernos y adaptados a las 
                            necesidades educativas.
                          </p>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2" id="following">
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <Card className="card-plain">
                    <CardBody>
                      <Row className="align-items-center">
                        <Col md="6">
                          <img
                            alt="Modernización"
                            className="img-rounded img-responsive"
                            src={require("assets/img/Alinambi/AlinambiInicios.jpg")}
                            style={{ width: "100%", marginBottom: "20px" }}
                          />
                        </Col>
                        <Col md="6">
                          <h4 className="title">Nuevo Milenio</h4>
                          <p className="description">
                            Con la llegada del siglo XXI, nuestra institución se posicionó como 
                            referente en innovación educativa. Implementamos laboratorios de 
                            última generación, desarrollamos programas de intercambio internacional 
                            y obtuvimos reconocimientos por nuestro modelo educativo integral.
                          </p>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>

                  <div className="text-center my-4">
                    <img
                      alt="separador"
                      src={require("assets/img/Alinambi/AlinambiInicios.jpg")}
                      style={{ maxWidth: "150px" }}
                    />
                  </div>

                  <Card className="card-plain">
                    <CardBody>
                      <h4 className="title text-center">Actualidad y Proyección</h4>
                      <p className="description text-center">
                        Hoy, la U.E. Aliñambi se mantiene a la vanguardia de la educación, 
                        con más de 1000 estudiantes y un equipo docente altamente calificado. 
                        Nuestros graduados destacan en universidades nacionales e internacionales, 
                        y nuestro compromiso con la excelencia educativa sigue más firme que nunca.
                      </p>
                      <div className="text-center mt-4">
                        <h5>Logros Destacados</h5>
                        <ul className="list-unstyled">
                          <li>✓ Acreditación Internacional de Calidad Educativa</li>
                          <li>✓ Reconocimiento por Innovación Pedagógica</li>
                          <li>✓ Centro de Excelencia en Educación Ambiental</li>
                        </ul>
                      </div>
                    </CardBody>
                  </Card>

                  <div className="text-center mt-5">
                    <Button className="btn-round" color="info">
                      <i className="fa fa-book" /> Conoce más sobre nuestra historia
                    </Button>
                  </div>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default HistoriaPage;