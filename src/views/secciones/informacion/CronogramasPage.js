import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Table,
} from "reactstrap";

// components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import CronogramasHeader from "components/Headers/CronogramasHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function CronogramasPage() {
  React.useEffect(() => {
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <CronogramasHeader />
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
              <h2 className="text-center title">Cronograma Académico</h2>
              <h5 className="text-center description">
                Calendario de actividades académicas, eventos y fechas
                importantes del año lectivo 2024-2025.
              </h5>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="12">
              <Card className="card-plain">
                <CardBody>
                  <CardTitle tag="h4">Primer Quimestre</CardTitle>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Mes</th>
                        <th>Actividad</th>
                        <th>Fecha</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Septiembre</td>
                        <td>Inicio de clases</td>
                        <td>4 de septiembre</td>
                      </tr>
                      <tr>
                        <td>Octubre</td>
                        <td>Primera evaluación parcial</td>
                        <td>9-13 de octubre</td>
                      </tr>
                      <tr>
                        <td>Noviembre</td>
                        <td>Segunda evaluación parcial</td>
                        <td>20-24 de noviembre</td>
                      </tr>
                      <tr>
                        <td>Diciembre</td>
                        <td>Evaluación quimestral</td>
                        <td>18-22 de diciembre</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md="12">
              <Card className="card-plain">
                <CardBody>
                  <CardTitle tag="h4">Segundo Quimestre</CardTitle>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Mes</th>
                        <th>Actividad</th>
                        <th>Fecha</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Enero</td>
                        <td>Inicio segundo quimestre</td>
                        <td>8 de enero</td>
                      </tr>
                      <tr>
                        <td>Febrero</td>
                        <td>Primera evaluación parcial</td>
                        <td>12-16 de febrero</td>
                      </tr>
                      <tr>
                        <td>Abril</td>
                        <td>Segunda evaluación parcial</td>
                        <td>15-19 de abril</td>
                      </tr>
                      <tr>
                        <td>Junio</td>
                        <td>Evaluación quimestral</td>
                        <td>17-21 de junio</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="6">
              <Card className="card-plain">
                <CardBody>
                  <CardTitle tag="h4">Eventos Especiales</CardTitle>
                  <ul className="list-unstyled">
                    <li>• Día de la Familia - Octubre</li>
                    <li>• Festival Navideño - Diciembre</li>
                    <li>• Feria de Ciencias - Marzo</li>
                    <li>• Juegos Deportivos - Mayo</li>
                    <li>• Graduación - Julio</li>
                  </ul>
                  <Button
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Ver Calendario de Eventos
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-plain">
                <CardBody>
                  <CardTitle tag="h4">Vacaciones y Feriados</CardTitle>
                  <ul className="list-unstyled">
                    <li>• Vacaciones de Navidad: 23 dic - 7 ene</li>
                    <li>• Carnaval: 12-13 febrero</li>
                    <li>• Semana Santa: 25-29 marzo</li>
                    <li>• Vacaciones de Verano: 1 jul - 31 ago</li>
                  </ul>
                  <Button
                    className="btn-round"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Descargar Calendario
                  </Button>
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

export default CronogramasPage;
