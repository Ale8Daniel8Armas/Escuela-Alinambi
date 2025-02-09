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
          <Row>
            <Col className="text-center" md="12">
              <h2
                className="mx-auto"
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
                Historia de la Unidad Educativa Aliñambi
              </h2>
              <p
                className="descripcion-valores justify-content-center description"
                style={{
                  fontSize: "22px",
                  color: "black",
                  marginTop: "30px",
                  fontWeight: "500",
                }}
              >
                Somos una institución educativa fiscomisional comprometida con
                los valores de igualdad, equidad e inclusión social desde
                nuestra fundación en 2016, bajo la normativa
                MINEDUC-ME-2016-00124-A, otorgada por el Ministerio de
                Educación. Impuslado por la fundación Aliñambi, a lo largo de
                los años, hemos implementado diversos proyectos que han
                fortalecido tanto la calidad humana de nuestra comunidad como el
                compromiso con la defensa de los derechos humanos y los valores
                que nos definen y enorgullecen.
              </p>
            </Col>
          </Row>
          <div className="container py-5">
            <Row>
              <Col md="15" className="mx-auto">
                <Card className="shadow">
                  <CardBody>
                    <h3
                      className="title text-center mb-3"
                      style={{ color: "#4CAF50" }}
                    >
                      Nuestros Orígenes
                    </h3>
                    <Row style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                      <Col md="6">
                        <img
                          alt="Fundación"
                          className="img-fluid rounded mb-3"
                          src={require("assets/img/Alinambi/AlinambiInicios.jpg")}
                        />
                      </Col>
                      <Col md="6">
                        <p
                          className="lead"
                          style={{
                            color: "black",
                            marginTop: "20px",
                            fontWeight: "400",
                          }}
                        >
                          La Unidad Educativa Aliñambi nació en 1985 con una
                          visión revolucionaria: crear un espacio educativo que
                          combinara la excelencia académica con el desarrollo
                          integral del ser humano. Iniciamos con tres aulas y
                          pocos estudiantes, pero con una gran pasión por la
                          educación.
                        </p>
                      </Col>
                    </Row>
                    <h3
                      className="title text-center mb-3"
                      style={{ color: "#4CAF50" }}
                    >
                      Crecimiento y Logros
                    </h3>
                    <Row style={{ paddingLeft: "25px", paddingRight: "25px" }}>
                      <Col md="6" className="order-md-2">
                        <img
                          alt="Desarrollo"
                          className="img-fluid rounded mb-3"
                          src={require("assets/img/Alinambi/fotoAlinambiVeintiSeis.jpg")}
                        />
                      </Col>
                      <Col md="6" className="order-md-1">
                        <p
                          className="lead"
                          style={{
                            color: "black",
                            marginTop: "20px",
                            fontWeight: "400",
                          }}
                        >
                          En la década de los 90, nuestra institución creció
                          considerablemente, con programas educativos
                          innovadores y la construcción de un nuevo campus. La
                          excelencia académica y el liderazgo en competiciones
                          nacionales nos posicionaron como una de las
                          principales instituciones educativas del país.
                        </p>
                      </Col>
                    </Row>
                    <h3
                      className="title text-center mb-3"
                      style={{ color: "#4CAF50" }}
                    >
                      Nuevo Milenio y Proyección Futura
                    </h3>
                    <Row style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                      <div
                        className="text-center my-4"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "10px",
                        }}
                      >
                        <img
                          alt="imagen1"
                          src={require("assets/img/Alinambi/fotoAlinambiSeis.jpg")}
                          style={{ maxWidth: "320px" }}
                        />
                        <img
                          alt="imagen2"
                          src={require("assets/img/Alinambi/fotoAlinambiOnce.jpg")}
                          style={{ maxWidth: "320px" }}
                        />
                        <img
                          alt="imagen3"
                          src={require("assets/img/Alinambi/fotoAlinambiOcho.jpg")}
                          style={{ maxWidth: "320px" }}
                        />
                      </div>
                      <p
                        className="lead text-center"
                        style={{
                          color: "black",
                          marginTop: "10px",
                          fontWeight: "400",
                        }}
                      >
                        Hoy, la U.E. Aliñambi es referente en innovación
                        educativa, con más de 1000 estudiantes y un equipo
                        docente altamente calificado. Nuestros logros incluyen
                        la acreditación internacional de calidad educativa y un
                        compromiso firme con la excelencia.
                      </p>
                    </Row>
                    <br />
                    <div className="text-center mt-4">
                      <h5>Logros Destacados</h5>
                      <ul className="list-unstyled">
                        <li>
                          ✓ Acreditación Internacional de Calidad Educativa
                        </li>
                        <li>✓ Reconocimiento por Innovación Pedagógica</li>
                        <li>✓ Centro de Excelencia en Educación Ambiental</li>
                      </ul>
                    </div>

                    <div className="text-center mt-4">
                      <Button className="btn-round" color="info">
                        <i className="fa fa-book" /> Conoce más sobre nuestra
                        historia
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default HistoriaPage;
