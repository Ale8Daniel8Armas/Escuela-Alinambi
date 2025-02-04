import React from "react";

//components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import MisionVisionHeader from "components/Headers/MisionVisionHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";


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
} from "reactstrap";

function SeccionVisionMision() {
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
      <MisionVisionHeader />
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
                Misión y Visión <br />
              </h4>
              <h6 className="description">U.E. Aliñambi</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <p className="description">
                Somos una institución educativa comprometida con la excelencia académica y la formación integral de nuestros estudiantes.
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
                    Misión
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Visión
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <div className="text-center">
                    <img
                      alt="Misión"
                      className="img-rounded img-responsive"
                      src={require("assets/img/Alinambi/fotoAlinambiVeintiCinco.jpg")}
                      style={{ maxWidth: "300px", marginBottom: "20px" }}
                    />
                    <h3>Nuestra Misión</h3>
                    <p className="description">
                      Formar integralmente a estudiantes con excelencia académica y valores humanos, 
                      mediante una educación personalizada que potencia el pensamiento crítico, 
                      la creatividad y el compromiso social. Nos dedicamos a cultivar mentes curiosas 
                      y corazones compasivos, preparando a nuestros alumnos para ser líderes éticos 
                      y ciudadanos globales que contribuyan positivamente a la sociedad.
                    </p>
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <img
                    alt="Visión"
                    className="img-rounded img-responsive"
                    src={require("assets/img/Alinambi/fotoAlinambiVentiuno.jpg")}
                    style={{ maxWidth: "300px", marginBottom: "20px" }}
                  />
                  <h3>Nuestra Visión</h3>
                  <p className="description">
                    Ser reconocidos como una institución educativa líder en innovación pedagógica, 
                    que inspire a cada estudiante a alcanzar su máximo potencial académico y personal. 
                    Aspiramos a crear un ambiente educativo donde la excelencia académica, 
                    la innovación tecnológica y los valores humanos se fusionen para formar 
                    individuos capaces de enfrentar los desafíos del siglo XXI con confianza 
                    y responsabilidad social.
                  </p>
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

export default SeccionVisionMision;