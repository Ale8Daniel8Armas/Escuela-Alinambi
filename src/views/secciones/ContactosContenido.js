import { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button, Card, CardBody, Collapse } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactAgenda = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-4" style={{ color: "#1E90FF" }}>
        Agenda de contactos
      </h1>
      <div className="h1">📖</div>

      <Card className="mt-4 p-4">
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
          Contáctanos
        </h2>
        <p className="fst-italic">¡Estaremos gustosos de atenderte!</p>
        <p>
          <strong>Teléfonos:</strong> 3033284 - 3033988
        </p>
        <p>
          <strong>Dirección:</strong> Calle Panzaleo - E8-213 e Isla Isabela
        </p>

        <div className="d-flex justify-content-center gap-3 fs-2 mt-3">
          <FaFacebook className="text-primary cursor-pointer" />
          <FaInstagram className="text-danger cursor-pointer" />
          <FaWhatsapp className="text-success cursor-pointer" />
          <FaTiktok className="text-dark cursor-pointer" />
        </div>
      </Card>

      <Card className="mt-4">
        <CardBody>
          <div className="btn-group d-flex">
            <Button color="primary">Departamento Escolar</Button>
            <Button color="secondary">Fundación</Button>
            <Button color="info">Oficinas</Button>
          </div>

          <div className="mt-3">
            {[
              "Secretaría General",
              "Transporte Aliñambi",
              "Contabilidad",
              "WhatsApp",
            ].map((item) => (
              <div key={item} className="border-bottom p-2">
                <Button
                  color="link"
                  className="w-100 text-start"
                  onClick={() => toggleSection(item)}
                >
                  {item} {openSections[item] ? "−" : "+"}
                </Button>
                <Collapse isOpen={openSections[item]}>
                  <p className="text-muted">Información de {item}</p>
                </Collapse>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      <h2 className="mt-4" style={{ color: "#1E90FF" }}>
        Ubicación
      </h2>
      <div className="mt-2" style={{ height: "300px", width: "100%" }}>
        <MapContainer
          center={[-0.2746, -78.5534]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>
      <br />
    </div>
  );
};

export default ContactAgenda;
