import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import AlianzaCarousel from "views/index-sections/alinambi-sections/AlianzasCarousel.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div
        className="main"
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
        <div className="section text-center">
          <Container
            style={{
              textAlign: "center",
              padding: "50px 20px",
              background: "linear-gradient(to right, #f0f8ff, #e6ffe6)",
              borderRadius: "15px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Row>
              <Col md="8" className="mx-auto">
                <h1
                  className="WelcomeTitle"
                  style={{
                    fontSize: "33px",
                    fontWeight: "bold",
                    color: "#2c3e50",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    marginBottom: "15px",
                  }}
                >
                  Bienvenidos a la Unidad Educativa Fiscomisional Aliñambi
                </h1>
                <p
                  className="Descripcion"
                  style={{
                    fontSize: "22px",
                    fontStyle: "italic",
                    color: "#4CAF50",
                    marginTop: "10px",
                    fontWeight: "500",
                  }}
                >
                  "Donde la solidaridad es un camino, la verdad se dice y se
                  vive, la justicia se ama y la amistad nos une"
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Row className="justify-content-center">
            <Col md="8">
              <h2
                className="text-center title"
                style={{
                  fontSize: "33px",
                  fontWeight: "bold",
                  color: "#2c3e50",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  marginBottom: "15px",
                }}
              >
                Nuestros Programas
              </h2>
              <h3
                className="justify-content-center description"
                style={{ color: "black" }}
              >
                Como parte de la Fundación Aliñambi, somos un centro educativo
                especializado en la educación básica. Contribuimos al desarrollo
                de la sociedad formando personas de calidad a través de
                actividades y programas planificados, apoyados por alianzas
                estratégicas.
              </h3>
              <br></br>
              <h3
                className="text-center"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#2c3e50",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  marginBottom: "15px",
                }}
              >
                ¡Descubre algunos de nuestros logros!
              </h3>
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
                  <CardTitle
                    tag="h4"
                    className="text-white"
                    style={{ marginBottom: "10px" }}
                  >
                    Proyecto de Agricultura
                  </CardTitle>
                  <CardText className="text-white">
                    El objetivo fue la consolidación de un invernadero donde se
                    realizaron la siembra, el mantenimiento y la cosecha de
                    diferentes tipos de vegetales, los cuales fueron consumidos
                    internamente y comercializados. El propósito era que los
                    recursos obtenidos se invirtieran en las actividades
                    realizadas.
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
                  <CardTitle
                    tag="h4"
                    className="text-white"
                    style={{ marginBottom: "10px" }}
                  >
                    Proyecto Centro de Capacitación Técnica Productiva
                  </CardTitle>
                  <CardText className="text-white">
                    Este proyecto busca facilitar el ingreso de los niños a
                    colegios técnicos mediante cursos de nivelación,
                    proporcionándoles conocimientos básicos sobre la vida, el
                    país y sus problemas sociales, económicos, políticos y
                    culturales, con el objetivo de mejorar su nivel de vida.
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
                  <CardTitle
                    tag="h4"
                    className="text-white"
                    style={{ marginBottom: "10px" }}
                  >
                    Actividades caritativas y festivas
                  </CardTitle>
                  <CardText className="text-white">
                    Realización de presentaciones y shows artísticos en el marco
                    de eventos o festividades nacionales, a cargo de
                    profesionales y preprofesionales académicos, con el fin de
                    promover una mayor integración tanto en la comunidad
                    estudiantil como en las familias.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Áreas Destacadas</h2>
            <Container>
              <Row>
                {/* Primera fila */}
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/divinoNinioAlinambi.jpg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Matriculación</h6>
                      <p>
                        Accede a información sobre el proceso de inscripción y
                        matrícula para nuevos estudiantes.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/fotoAlinambiOcho.jpg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Admisiones</h6>
                      <p>
                        Conoce los requisitos y pasos para formar parte de
                        nuestra comunidad educativa.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/fotoAlinambiVeinte.jpg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Historia</h6>
                      <p>
                        Descubre nuestra trayectoria y compromiso con la
                        educación de calidad.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/LemaAlinambi.jpeg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Servicios</h6>
                      <p>
                        Conoce los servicios que ofrecemos para garantizar un
                        aprendizaje integral.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                {/* Segunda fila */}
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/barAlinambi.jpg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Contactos</h6>
                      <p>
                        Contáctanos para resolver tus dudas y obtener más
                        información.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/agendasAlinambi.jpg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Actividades</h6>
                      <p>
                        {" "}
                        Participa en nuestras actividades extracurriculares y
                        eventos especiales.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/letreroAlinambi.jpg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Boletines Informativos</h6>
                      <p>Encuentra documentos y archivos de nuestra entidad.</p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card
                    data-background="image"
                    style={{
                      backgroundImage:
                        "url(" +
                        require("assets/img/Alinambi/niñosAlinambi.jpg") +
                        ")",
                    }}
                  >
                    <CardBody>
                      <h6 className="card-category">Nuestra Fundación</h6>
                      <p>
                        Aprende más sobre los valores y objetivos que guían
                        nuestra institución.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
        <AlianzaCarousel />
        <DemoFooter />
      </div>
    </>
  );
}

export default LandingPage;
