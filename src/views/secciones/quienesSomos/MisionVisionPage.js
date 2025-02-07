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
          <Col className="text-center" md="12">
            <h2
              className="mx-auto"
              style={{
                fontSize: "23px",
                fontWeight: "bold",
                color: "#2c3e50",
                letterSpacing: "1.5px",
                marginBottom: "15px",
                marginTop: "35px",
              }}
            >
              Aliñambi construye y guía los sueños de sus estudiantes
            </h2>
          </Col>
          <div
            className="nav-tabs-navigation"
            style={{
              borderTop: "3px solid navy",
              width: "100%",
              margin: "10px 0",
            }}
          >
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.textShadow =
                        "2px 2px 10px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.textShadow = "none";
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
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.textShadow =
                        "2px 2px 10px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.textShadow = "none";
                    }}
                  >
                    Visión
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>

          {/* Fondo suave con color pastel o gris claro */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane
              tabId="1"
              id="follows"
              style={{
                borderTop: "3px solid navy",
                width: "100%",
                margin: "10px 0",
              }}
            >
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <div
                    className="text-center"
                    style={{
                      backgroundColor: "#f4f4f4",
                      padding: "30px",
                      borderRadius: "8px",
                    }}
                  >
                    <img
                      alt="Misión"
                      className="img-rounded img-responsive"
                      src={require("assets/img/Alinambi/fotoAlinambiVeintiCinco.jpg")}
                      style={{ maxWidth: "300px", marginBottom: "20px" }}
                    />
                    <h3
                      style={{
                        color: "#34495e",
                        fontSize: "30px",
                        fontWeight: "700",
                      }}
                    >
                      Nuestra Misión
                    </h3>
                    <p
                      className="description"
                      style={{
                        color: "black",
                        fontSize: "18px",
                        lineHeight: "1.8",
                      }}
                    >
                      Formar integralmente a estudiantes con excelencia
                      académica y valores humanos, mediante una educación
                      personalizada que potencia el pensamiento crítico, la
                      creatividad y el compromiso social. Nos dedicamos a
                      cultivar mentes curiosas y corazones compasivos,
                      preparando a nuestros alumnos para ser líderes éticos y
                      ciudadanos globales que contribuyan positivamente a la
                      sociedad.
                    </p>
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane
              className="text-center"
              tabId="2"
              id="following"
              style={{
                borderTop: "3px solid navy",
                width: "100%",
                margin: "10px 0",
              }}
            >
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <div
                    className="text-center"
                    style={{
                      backgroundColor: "#f4f4f4",
                      padding: "30px",
                      borderRadius: "8px",
                    }}
                  >
                    <img
                      alt="Visión"
                      className="img-rounded img-responsive"
                      src={require("assets/img/Alinambi/fotoAlinambiVentiuno.jpg")}
                      style={{ maxWidth: "300px", marginBottom: "20px" }}
                    />
                    <h3
                      style={{
                        color: "#34495e",
                        fontSize: "30px",
                        fontWeight: "700",
                      }}
                    >
                      Nuestra Visión
                    </h3>
                    <p
                      className="description"
                      style={{
                        color: "black",
                        fontSize: "18px",
                        lineHeight: "1.8",
                      }}
                    >
                      Ser reconocidos como una institución educativa líder en
                      innovación pedagógica, que inspire a cada estudiante a
                      alcanzar su máximo potencial académico y personal.
                      Aspiramos a crear un ambiente educativo donde la
                      excelencia académica, la innovación tecnológica y los
                      valores humanos se fusionen para formar individuos capaces
                      de enfrentar los desafíos del siglo XXI con confianza y
                      responsabilidad social.
                    </p>
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

export default SeccionVisionMision;
