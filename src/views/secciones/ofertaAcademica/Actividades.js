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
      title: "Comparsas y festivales de talentos",
      description:
        "Espacio donde los estudiantes muestran sus habilidades artísticas en música, danza, teatro y otras expresiones culturales, promoviendo la creatividad y el desarrollo personal.",
      image: require("assets/img/Alinambi/fotoAlinambiVeintiSiete.jpg"),
      color: "light",
    },
    {
      title: "Eventos y competencias deportivas",
      description:
        "Competencia deportiva que fomenta el espíritu deportivo, trabajo en equipo y vida saludable entre nuestros estudiantes en nuestro terreno de fútbol.",
      image: require("assets/img/Alinambi/campeonato-Alinambi.jpg"),
      color: "light",
    },
    {
      title: "Encuentro Navideño",
      description:
        "En Aliñambi compartimos momentos de unión y solidaridad, incluyendo presentaciones artísticas, intercambio de regalos y actividades benéficas.",
      image: require("assets/img/Alinambi/navidad-alinambi.jpg"),
      color: "light",
    },
    {
      title: "Campaña de Reciclaje",
      description:
        "En Alinambi amamos y cuidamos la naturaleza, por eso siempre realizamos campañas de reciclaje para cultivar el espíritu ambiental de nuestros estudiantes.",
      image: require("assets/img/Alinambi/campaniaReciclaje.jpg"),
      color: "light",
    },
    {
      title: "Día del niño",
      description:
        "En esta escuela siempre damos prioridad la vida y la felicidad de nuestros niños y en su día, los agasajos y las celebraciones hacia ellos nunca faltan.",
      image: require("assets/img/Alinambi/fotoAlinambiTrece.jpg"),
      color: "light",
    },
    {
      title: "Festival del Inti Raymi",
      description:
        "Celebramos el solsticio de invierno en un evento que une a padres, estudiantes y docentes en una jornada de actividades recreativas, deportivas y culturales, fortaleciendo los lazos de la comunidad educativa.",
      image: require("assets/img/Alinambi/fotoAlinambiDoce.jpg"),
      color: "light",
    },
  ];

  return (
    <div className="activities-section py-5">
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <h2
              className="text-center"
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
              Nuestras Actividades
            </h2>
            <h5
              className="text-center justify-content-center description"
              style={{
                fontSize: "22px",
                color: "black",
                marginTop: "30px",
                fontWeight: "500",
              }}
            >
              Descubre las experiencias que hacen única a nuestra comunidad
              educativa
            </h5>
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
