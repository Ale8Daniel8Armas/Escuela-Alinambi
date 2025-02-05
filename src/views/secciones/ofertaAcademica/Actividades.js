import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const ActivitiesContent = () => {
  const activities = [
    {
      title: "Carnaval Estudiantil",
      description:
        "Celebración anual llena de color y alegría donde nuestros estudiantes participan en desfiles, juegos tradicionales y presentaciones culturales, fortaleciendo lazos de amistad y tradición.",
      image: require("assets/img/fabio-mangione.jpg"),
      color: "light",
    },
    {
      title: "Torneo de Fútbol Intercolegial",
      description:
        "Competencia deportiva que fomenta el espíritu deportivo, trabajo en equipo y vida saludable entre nuestros estudiantes, con participación de diferentes categorías y géneros.",
      image: require("assets/img/ilya-yakover.jpg"),
      color: "light",
    },
    {
      title: "Agasajo Navideño",
      description:
        "Evento especial donde la comunidad educativa comparte momentos de unión y solidaridad, incluyendo presentaciones artísticas, intercambio de regalos y actividades benéficas.",
      image: require("assets/img/fabio-mangione.jpg"),
      color: "light",
    },
    {
      title: "Festival de Talentos",
      description:
        "Espacio donde los estudiantes muestran sus habilidades artísticas en música, danza, teatro y otras expresiones culturales, promoviendo la creatividad y el desarrollo personal.",
      image: require("assets/img/ilya-yakover.jpg"),
      color: "light",
    },
    {
      title: "Día de la Familia",
      description:
        "Celebración que une a padres, estudiantes y docentes en una jornada de actividades recreativas, deportivas y culturales, fortaleciendo los lazos de la comunidad educativa.",
      image: require("assets/img/fabio-mangione.jpg"),
      color: "light",
    },
    {
      title: "Feria de Ciencias",
      description:
        "Exposición de proyectos científicos desarrollados por nuestros estudiantes, donde demuestran su creatividad e innovación en diferentes áreas del conocimiento.",
      image: require("assets/img/ilya-yakover.jpg"),
      color: "light",
    },
  ];

  return (
    <div className="activities-section py-5">
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="title">Nuestras Actividades</h2>
            <p
              className="description"
              style={{ fontWeight: "normal", color: "black" }}
            >
              Descubre las experiencias que hacen única nuestra comunidad
              educativa
            </p>
          </Col>
        </Row>
        <Row>
          {activities.map((activity, index) => (
            <Col md="6" className="mb-4" key={index}>
              <Card
                className={`h-100 shadow-sm bg-${activity.color}`}
                style={{
                  border: `2px solid ${activity.color}`,
                }}
              >
                <CardImg
                  top
                  src={activity.image}
                  alt={activity.title}
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    border: `2px solid ${activity.color}`,
                  }}
                />
                <CardBody>
                  <CardTitle tag="h4" className="mb-3">
                    {activity.title}
                  </CardTitle>
                  <CardText
                    className="text-muted"
                    style={{ fontWeight: "normal", color: "black" }}
                  >
                    {activity.description}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ActivitiesContent;
